import { SlashCommandBuilder } from '@discordjs/builders';

import { Command } from '../interfaces/discordCommand';

export const tracker: Command = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('tracker')
        .setDescription('Create and use a discord tracker')
        .addStringOption((option) =>
            option
                .setName('name')
                .setDescription('The trackers name')
                .setRequired(true)
        ),
    run: async (interaction) => {
        const trackersName = interaction.options.get('tracker_name')?.value;

        await interaction.reply({ content: 'Setting up tracker....', ephemeral: true });

        switch (trackersName) {
            case "player": {
                await interaction.deleteReply();

                await interaction.followUp({ content: 'Players discord tracker created', ephemeral: true })

                break;
            }
            default: {
                await interaction.deleteReply();

                await interaction.followUp({ content: 'Invalid tracker', ephemeral: true });

                break;
            }
        }
    }
}
