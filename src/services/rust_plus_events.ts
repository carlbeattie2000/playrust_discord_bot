import { PairedServersConfig } from '../interfaces/pairedServer';
import { SocketConnection } from '../interfaces/rustplus';

import RustPlus from './rust_plus';
import { loadPairedServers } from './rust_plus_pairing';

let rustPlusSocketConnections: SocketConnection[] = [];
let loadingSocket = false;

export function loadRustPlusSocket(): boolean {
    loadingSocket = true;

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

            loadingSocket = false;

            rustPlusConnection.sendTeamMessage('[BOT]: CarlsRustBotConnected');
        })

        rustPlusConnection.on('message', (message) => {
            console.log('Message from:', server.name.slice(0, 18), ':', message);
        })

        rustPlusConnection.on('error', (error) => {
            console.log('Socket error for server:', server.name, 'Error:', error);
        })

        rustPlusConnection.on('disconnected', () => {
            console.log('Disconnected from:', server.name);
        })

        rustPlusConnection.connect();

        rustPlusSocketConnections.push({
            serverId: server.id,
            connection: rustPlusConnection
        })
    }

    console.log('Connected to', pairedRustServer.servers.length, 'servers.');

    return true;
}

function retryTimeout(timeout: number, cb: Function) {
    setTimeout(() => cb, timeout);
}

function attemptSocketUnpair(id: string) {
    if (loadingSocket) {
        return retryTimeout(5000, attemptSocketUnpair);
    }

    rustPlusSocketConnections = rustPlusSocketConnections.filter((connection) => connection.serverId !== id);
}

export function rustPlusSocketUnpair(id: string) {
    const serverFound = rustPlusSocketConnections.find((connection) => connection.serverId === id);

    if (!serverFound) return;

    serverFound.connection.disconnect();

    attemptSocketUnpair(id);
}
