import { Client, Events, GatewayIntentBits } from 'discord.js';

import { onInteraction } from './events/on_interaction';
import { onReady } from './events/on_ready';
import fcmListen from './services/rust_plus_pairing';

const BOT = new Client({ intents: [GatewayIntentBits.Guilds] });

BOT.once(Events.ClientReady, async client => {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    await onReady(BOT);

    fcmListen(BOT);
})

BOT.on(Events.InteractionCreate, async (interaction) => {
    await onInteraction(interaction)
})

BOT.login(process.env.DISCORD_TOKEN);
