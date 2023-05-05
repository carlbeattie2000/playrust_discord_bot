import { PairedServer, PairedServersConfig } from '../interfaces/pairedServer';
import { SocketConnection } from '../interfaces/rustplus';
import chatCommands from '../rustplusChatCommands/_command_list';
import { AppTeamInfo } from '../static/rustplus.proto';

import RustPlus from './rust_plus';
import { loadPairedServers } from './rust_plus_pairing';

let rustPlusSocketConnections: SocketConnection[] = [];
let loadingSocket = false;

const teamMembersStatus: TeamMemberStatus = {}
let mapSize = 0;

interface TeamMemberStatus {
    [id: string]: {
        dead: boolean
    }
}

export function connectToSocket(server: PairedServer) {
    loadingSocket = true;

    const rustPlusConnection = new RustPlus(server.ip,
                                            server.port, server.playerId,
    server.playerToken);

    rustPlusConnection.registerChatCommands(chatCommands);

    rustPlusConnection.on('connecting', () => {
        console.log('Connecting to server:', server.name);
    })

    rustPlusConnection.on('connected', () => {
        console.log('Connected to server:', server.name);

        setInterval(() => {
            rustPlusConnection.getTeamInfo();
        }, 2000)

        // Load server info and display pop & set map size on connect
        rustPlusConnection.getInfo();

        rustPlusConnection.sendTeamMessage('[BOT]: CarlsRustBotConnected');
        rustPlusConnection.sendTeamMessage('[BOT]: Team tracking enabled');
    })

    rustPlusConnection.on('message', (message) => {
        if (message.response && message.response.info) {
            if (mapSize === 0) {
                mapSize = Math.ceil(message.response.info.mapSize / 150);
            }
        }

        if (message.response && message.response.teamInfo) {
            const teamInfo: AppTeamInfo = message.response.teamInfo;

            if (loadingSocket || Object.values(teamMembersStatus).length === 0) {
                for (const member of teamInfo.members) {
                    teamMembersStatus[member.name] = {
                        dead: false,
                    }
                }
            }

            const dateNow = new Date();

            for (const member of teamInfo.members) {
                if (!member.isOnline) {
                    continue;
                }

                if (member.isAlive === false && member.isOnline && !teamMembersStatus[member.name].dead) {
                    if (dateNow.getTime() - member.deathTime > (1000 * 5)) {
                        const grid: number = 150;

                        const x: number = Math.floor(member.x / grid);
                        const y: number = Math.floor(member.y / grid);

                        const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

                        rustPlusConnection.sendTeamMessage(`[BOT]: ${member.name} has died @${alpha[x]}${(mapSize - y) - 1}.`);
                        teamMembersStatus[member.name].dead = true;
                        teamMembersStatus[member.name];
                    }
                }

                if (member.isAlive && teamMembersStatus[member.name]?.dead) {
                    teamMembersStatus[member.name].dead = false;
                }
            }
        }
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

    loadingSocket = false;
}

export function loadRustPlusSocket(): boolean {
    let pairedRustServer: PairedServersConfig | undefined = loadPairedServers();

    if (pairedRustServer === undefined) {
        return false;
    };

    for (const server of pairedRustServer.servers) {
        connectToSocket(server);
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
