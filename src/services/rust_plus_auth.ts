import express, { Express, Request, Response } from 'express';
import { join } from 'path';

const PORT = 4088;

class App {
    private app: Express | null;
    private server: any;
    public link: string;
    public onRegistered: Function;

    constructor() {
        this.app = null;
        this.server = null;
        this.link = 'http://localhost:'+PORT;

        this.onRegistered = () => {};
    }

    async start() {
        this.app = express();

        this.app.get('/', (_: Request, res: Response) => {
            res.sendFile(join(__dirname, '../', 'static', 'pair.html'));
        })

        this.app.post('/rust_auth_register', (req: Request, res: Response) => {
            const { token } = req.query;

            this.onRegistered();

            return res.sendStatus(201);
        })

        this.server = this.app.listen(PORT);
    }

    async stop() {
        if (this.server) {
            this.server.close();
        }
    }
}

export default new App();
