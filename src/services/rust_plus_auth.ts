import express, { Express, Request, Response } from 'express';
import { join } from 'path';
import { existsSync, readFileSync, writeFileSync } from 'fs';

import { PushReceiver } from '@eneris/push-receiver';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { Credentials } from '@eneris/push-receiver/dist/types';
import AuthConfig from '../interfaces/authConfig';

const PORT = 4088;

async function getExpoPushToken(credientals: Credentials) {
    const response = await axios.post('https://exp.host/--/api/v2/push/getExpoPushToken', {
        deviceId: uuid(),
        experienceId: '@facepunch/RustCompanion',
        appId: 'com.facepunch.rust.companion',
        deviceToken: credientals.fcm.token,
        type: 'fcm',
        development: false
    });

    return response.data.data.expoPushToken;
}

async function registerWithRustPlus(authToken: string, expoPushToken: string) {
    return axios.post('https://companion-rust.facepunch.com:443/api/push/register', {
        AuthToken: authToken,
        DeviceId: 'rustplus.js',
        PushKind: 0,
        PushToken: expoPushToken,
    })
}

async function fcmRegister(steamToken: string, writeConfigFunction: Function) {
    try {
        const fcmCreds = await new PushReceiver({
            senderId: '976529667804',
            persistentIds: [],
        }).register()

        const expoPushToken = await getExpoPushToken(fcmCreds)

        await registerWithRustPlus(steamToken, expoPushToken).catch((e) => {
            throw e;
        });

        writeConfigFunction(join(process.cwd(), 'priv/'), steamToken, expoPushToken, fcmCreds);
    } catch (err) {
        throw err;
    }
}

class App {
    private app: Express | null;
    private server: any;
    public link: string;
    public onRegistered: Function;
    public onError: Function;
    public onAlreadyRegistered: Function;

    private privDirPath: string;

    constructor() {
        this.app = null;
        this.server = null;
        this.link = 'http://localhost:'+PORT;

        this.privDirPath = join(process.cwd(), 'priv/');

        this.onRegistered = () => {};
        this.onError = () => {};
        this.onAlreadyRegistered = () => {};
    }

    async start() {
        const lastAuthed = this.getLastAuthed();

        if (this.lastAuthStillValid(lastAuthed)) {
            this.onAlreadyRegistered();

            return;
        }

        this.app = express();

        this.app.use(express.json());

        this.app.get('/', (_: Request, res: Response) => {
            res.sendFile(join(__dirname, '../', 'static', 'pair.html'));
        })

        this.app.post('/rust_auth_register', async (req: Request, res: Response) => {
            const tokenQuery = req.body;

            try {
                await fcmRegister(tokenQuery.token as string, this.writeAuthConfig);

                this.onRegistered();
                this.saveAuthTimestamp();

                return res.sendStatus(201);
            } catch (err) {
                console.log(err);

                this.onError();

                res.sendStatus(500);
            }
        })

        this.server = this.app.listen(PORT);
    }

    async stop() {
        if (this.server) {
            this.server.close();
        }
    }

    getAuthConfig(): AuthConfig | undefined {
        const filePath = join(this.privDirPath, 'auth.config.json');

        if (existsSync(filePath)) {
            const authConfig: AuthConfig = JSON.parse(readFileSync(filePath, 'utf-8'));

            return authConfig;
        }

        return undefined
    }

    writeAuthConfig(dir: string, steamToken: string, expoPushToken: string, fcmCreds: Credentials) {
        const filePath = join(dir, 'auth.config.json');

        const authConfigJson: AuthConfig = {
            fcm_credientals: fcmCreds,
            expo_push_token: expoPushToken,
            steam_token: steamToken
        }

        writeFileSync(filePath, JSON.stringify(authConfigJson));
    }

    saveAuthTimestamp(): void {
        const filePath = join(this.privDirPath, 'last_authed.json');

        const timestampJson = {
            'timestamp': new Date().getTime()
        }

        writeFileSync(filePath, JSON.stringify(timestampJson));
    }

    getLastAuthed(): number {
        const filePath = join(this.privDirPath, 'last_authed.json');

        if (existsSync(filePath)) {
            const lastAuthedContents = JSON.parse(readFileSync(filePath, 'utf-8'));

            return lastAuthedContents['timestamp'];
        }

        return -1;
    }

    lastAuthStillValid(lastAuthedTimestamp: number): boolean {
        const daysAuthValid = 14;
        const daysAuthValidToMs = daysAuthValid * 86000;
        const timestampNow = new Date().getTime();

        if (timestampNow - lastAuthedTimestamp > daysAuthValidToMs) {
            return false;
        }

        if (lastAuthedTimestamp === -1) return false;

        return true;
    }
}

export default new App();
