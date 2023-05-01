import {
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
} from '@discordjs/builders';

import { CommandInteraction } from 'discord.js';

export interface Command {
    cooldown?: number,
    data:
        | Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">
        | SlashCommandSubcommandsOnlyBuilder;
    run: (interaction: CommandInteraction) => Promise<void>;
}

export interface Commands {
    [name: string]: Command
}
