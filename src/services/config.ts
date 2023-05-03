import express, { Express, Request, Response } from 'express';
import { join } from 'path';
import discord_channel_helper from './discord_channel_helper';

const PORT = 4089;
const TIMEOUT_DELAY_MS = 60000;

class ConfigService {
    private app: Express | null;
    private server: any;
    public link: string;
    private closeDownTimeout: NodeJS.Timeout | null;

    public onReady: Function;

    constructor() {
        this.app = null;
        this.server = null;
        this.link = 'http://localhost:'+PORT;

        this.closeDownTimeout = null;

        this.onReady = () => {};
    }

    async start() {
        if (this.server) this.stop();

        this.app = express();

        this.app.get('/', (_: Request, res: Response) => {
            res.sendFile(join(process.cwd(), 'public', 'config_ui', 'index.html'));
        })

        this.app.use(express.json());
        this.app.use(express.static(join(process.cwd(), 'public')))

        this.server = this.app.listen(PORT, () => {
            this.onReady();
        });

        this.closeDownTimeout = setTimeout(() => {
            discord_channel_helper.sendMessage('general', 'Config server shutdown!');

            this.stop();
        }, TIMEOUT_DELAY_MS);
    }

    async stop() {
        if (this.server) {
            this.server.close();
        }
    }
}

export default new ConfigService();
