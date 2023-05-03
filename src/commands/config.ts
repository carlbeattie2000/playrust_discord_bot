import { SlashCommandBuilder } from '@discordjs/builders';

import { Command } from '../interfaces/discordCommand';

import config from '../services/config';

export const start_config: Command = {
    cooldown: 120,
    data: new SlashCommandBuilder()
        .setName('config')
        .setDescription('Start the config UI server'),
    run: async (interaction) => {
        await interaction.deferReply();

        await interaction.followUp({ content: 'Starting server.....', ephemeral: true });

        config.onReady = async () => {
            await interaction.deleteReply();

            await interaction.followUp(`Server started: ${config.link}`);
        }

        config.start();
    }
}

export const stop_config: Command = {
    cooldown: 20,
    data: new SlashCommandBuilder()
        .setName('stop_config')
        .setDescription('Close the config UI server'),
    run: async (interaction) => {
        await interaction.deferReply();

        config.stop();

        await interaction.followUp({ content: 'Config server closed', ephemeral: true });
    }
}
