import { Client, Events, GatewayIntentBits } from 'discord.js';

import { onInteraction } from './events/on_interaction';
import { onReady } from './events/on_ready';
import fcmListen from './services/rust_plus_pairing';
import discord_channel_helper from './services/discord_channel_helper';
import { loadRustPlusSocket } from './services/rust_plus_events';

const BOT = new Client({ intents: [GatewayIntentBits.Guilds] });

discord_channel_helper.loadClient(BOT);


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
