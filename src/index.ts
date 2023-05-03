import { Client, Events, GatewayIntentBits } from 'discord.js';
import { PairedServersConfig } from './interfaces/pairedServer';

import { onInteraction } from './events/on_interaction';
import { onReady } from './events/on_ready';
import fcmListen, { loadPairedServers } from './services/rust_plus_pairing';
import RustPlus from './services/rust_plus';
import discord_channel_helper from './services/discord_channel_helper';

const BOT = new Client({ intents: [GatewayIntentBits.Guilds] });

discord_channel_helper.loadClient(BOT);

function loadRustPlusSocket(): boolean {
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

BOT.once(Events.ClientReady, async client => {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    await onReady(BOT);

    fcmListen(BOT);


    if (!loadRustPlusSocket()) {
        const retryMs = 10000;

        console.log('No paired server found... Retrying in', retryMs / 1000, 'seconds')

        const timeout = setInterval(() => {
            if (loadRustPlusSocket()) {
                clearInterval(timeout);
            }

            console.log('No paired server found... Retrying in', retryMs / 1000, 'seconds')
        }, retryMs)
    }

})

BOT.on(Events.InteractionCreate, async (interaction) => {
    await onInteraction(interaction)
})

BOT.login(process.env.DISCORD_TOKEN);
