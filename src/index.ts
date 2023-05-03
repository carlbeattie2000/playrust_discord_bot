import { Client, Events, GatewayIntentBits } from 'discord.js';
import { PairedServer } from './interfaces/pairedServer';

import { onInteraction } from './events/on_interaction';
import { onReady } from './events/on_ready';
import fcmListen, { loadPairedServer } from './services/rust_plus_pairing';
import RustPlus from './services/rust_plus';

const BOT = new Client({ intents: [GatewayIntentBits.Guilds] });

function loadRustPlusSocket(): boolean {
    let pairedRustServer: PairedServer | undefined = loadPairedServer();

    if (pairedRustServer === undefined) return false;

    const rustPlusConnection = new RustPlus(pairedRustServer.ip, pairedRustServer.port, pairedRustServer.playerId, pairedRustServer.playerToken);

    rustPlusConnection.on('connecting', () => {
        console.log('Connecting to server:', pairedRustServer?.name);
    })

    rustPlusConnection.on('connected', () => {
        console.log('Connected to server:', pairedRustServer?.name);

        rustPlusConnection.sendTeamMessage('[BOT]: RustPlusBot connected!');
    })

    rustPlusConnection.on('message', (message) => {
        console.log(message);
    })

    rustPlusConnection.on('error', (e) => {
        console.log(e);
    })

    rustPlusConnection.connect();

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
