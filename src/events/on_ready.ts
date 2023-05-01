import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Client } from 'discord.js';

import commands from '../commands/_command_list';

export const onReady = async (BOT: Client) => {
    const rest = new REST({ version: "9" }).setToken(
        process.env.DISCORD_TOKEN as string
    )

    const commandsData = Object.values(commands).map((command) => command.data.toJSON());

    await rest.put(
        Routes.applicationCommands(
            BOT.user?.id || "missing id",
        ),
        { body: commandsData }
    )

    console.log('discord ready')
};
