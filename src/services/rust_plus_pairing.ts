import { PairedServer, PairedServersConfig } from '../interfaces/pairedServer';
import { Client, TextChannel } from "discord.js";
import AuthConfig from "../interfaces/authConfig";
import rust_plus_auth from "./rust_plus_auth";
import { listen } from 'push-receiver';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

async function fcmListen(client: Client) {
    const authConfigFile: AuthConfig | undefined = rust_plus_auth.getAuthConfig();

    if (authConfigFile === undefined) {
        console.log('Please use /rust_auth to pair rust+ with the bot.')

        return;
    }

    const fcmClinet = await listen(authConfigFile.fcm_credientals, ({ notification, persistentId }: any) => {
        const body = JSON.parse(notification.data.body);

        const generalChannel = client.channels.cache.get('1102239831892959335');

        let msg = '';

        if (body.type === 'server') {
            const savedServer = loadPairedServer();

            if (savedServer !== undefined && savedServer.id === body.id) {
                return;
            };

            savePairedServer(body);

            msg = `Discord paired with server: ${body.name}`;
        }

        if (body.type === 'entity') {
            msg = `Discord paired with: ${body.entityName}`;
        }

        if (msg === '') return;

        if (generalChannel?.isTextBased()) {
            (<TextChannel> generalChannel).send(msg);
        }

        console.log(body);

    })
}

function savePairedServer(pairedServer: PairedServer) {
    const filePath = join(process.cwd(), 'priv/paired_server.json');

    writeFileSync(filePath, JSON.stringify(pairedServer));
}

export function loadPairedServer(): PairedServer | undefined {
    const filePath = join(process.cwd(), 'priv/paired_server.json');

    if (existsSync(filePath)) {
        return JSON.parse(readFileSync(filePath, 'utf-8'));
    }

    return undefined;
}

export default fcmListen
