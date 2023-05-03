import { SlashCommandBuilder } from '@discordjs/builders';

import { Command } from '../interfaces/discordCommand';

export const config: Command = {
    data: new SlashCommandBuilder()
        .setName('config')
        .setDescription('Start the config UI server'),
    run: async (interaction) => {

    }
}

export const stop_config: Command = {
    data: new SlashCommandBuilder()
        .setName('stop_config')
        .setDescription('Close the config UI server'),
    run: async (interaction) => {

    }
}
