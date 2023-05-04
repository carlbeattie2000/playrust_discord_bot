import express, { Express, Request, Response } from 'express';
import { join } from 'path';
import discord_channel_helper from './discord_channel_helper';
import { loadPairedServers, unpairServer, loadSavedEntities } from './rust_plus_pairing'
import { rustPlusSocketUnpair } from './rust_plus_events';

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

        this.app.get('/paired_servers', (_: Request, res: Response) => {
            res.sendFile(join(process.cwd(), 'public', 'config_ui', 'index.html'));
        })

        this.app.get('/paired_entities', (_: Request, res: Response) => {
            res.sendFile(join(process.cwd(), 'public', 'config_ui', 'index.html'));
        })

        this.app.get('/discord', (_: Request, res: Response) => {
            res.sendFile(join(process.cwd(), 'public', 'config_ui', 'index.html'));
        })

        this.app.get('/api/paired_servers', (_: Request, res: Response) => {
            const pairedServers = loadPairedServers();

            if (!pairedServers) {
                return res.sendStatus(404);
            }

            return res.json(pairedServers);
        })

        this.app.post('/api/unpair_server', (req: Request, res: Response) => {
            const { id } = req.query;

            if (unpairServer(id as string)) {
                rustPlusSocketUnpair(id as string);

                return res.sendStatus(204)
            }

            return res.sendStatus(404);
        })


        this.app.get('/api/paired_entities', (_: Request, res: Response) => {
            const pairedEntities = loadSavedEntities();

            if (!pairedEntities) {
                return res.sendStatus(404);
            }

            return res.json(pairedEntities);
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
