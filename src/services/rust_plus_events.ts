import { PairedServersConfig } from '../interfaces/pairedServer';

import RustPlus from './rust_plus';
import { loadPairedServers } from './rust_plus_pairing';

export function loadRustPlusSocket(): boolean {
    let pairedRustServer: PairedServersConfig | undefined = loadPairedServers();

    if (pairedRustServer === undefined) return false;

    for (const server of pairedRustServer.servers) {
        const rustPlusConnection = new RustPlus(server.ip,
                                                server.port, server.playerId,
        server.playerToken);

        rustPlusConnection.on('connecting', () => {
            console.log('Connecting to server:', server.name);
        })

        rustPlusConnection.on('connected', () => {
            console.log('Connected to server:', server.name);

            rustPlusConnection.sendTeamMessage('[BOT]: CarlsRustBotConnected');
        })

        rustPlusConnection.on('message', (message) => {
            console.log('Message from:', server.name.slice(0, 18), ':', message);
        })

        rustPlusConnection.on('error', (error) => {
            console.log('Socket error for server:', server.name, 'Error:', error);
        })

        rustPlusConnection.connect();
    }

    console.log('Connected to', pairedRustServer.servers.length, 'servers.');

    return true;
}
