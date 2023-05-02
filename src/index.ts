import { Client, Events, GatewayIntentBits } from 'discord.js';

import { onInteraction } from './events/on_interaction';
import { onReady } from './events/on_ready';
import fcmListen, { loadPairedServer } from './services/rust_plus_pairing';
import RustPlus from './services/rust_plus';

const BOT = new Client({ intents: [GatewayIntentBits.Guilds] });

BOT.once(Events.ClientReady, async client => {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    await onReady(BOT);

    fcmListen(BOT);

    const pairedRustServer = loadPairedServer();

    if (pairedRustServer) {
        const rustPlusConnection = new RustPlus(pairedRustServer.ip, pairedRustServer.port, pairedRustServer.playerId, pairedRustServer.playerToken);

        rustPlusConnection.on('connecting', () => {
            console.log('Connecting to server:', pairedRustServer.name);
        })

        rustPlusConnection.on('connected', () => {
            console.log('Connected to server:', pairedRustServer.name);
        })

        rustPlusConnection.on('message', (message) => {
            console.log(message);
        })
    }

})

BOT.on(Events.InteractionCreate, async (interaction) => {
    await onInteraction(interaction)
})

BOT.login(process.env.DISCORD_TOKEN);
