import { SlashCommandBuilder } from '@discordjs/builders';

import { Command } from '../interfaces/discordCommand';

export const trackplayer: Command = {
    cooldown: 15,
    data: new SlashCommandBuilder()
        .setName('trackplayer')
        .setDescription('Create a tracker for a player')
        .addStringOption((option) =>
            option
                .setName('name')
                .setDescription('The Players name')
                .setRequired(true)
        ),
    run: async (interaction) => {
        const trackersName = interaction.options.get('tracker_name')?.value;

        await interaction.reply({ content: 'Finding player....', ephemeral: true });
    }
}
