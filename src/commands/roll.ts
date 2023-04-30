import { SlashCommandBuilder } from '@discordjs/builders';

import { Command } from '../interfaces/discordCommand';

export const roll: Command = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Roll a random number'),
    run: async (interaction) => {
        await interaction.reply(Math.floor(Math.random() * 100).toString());
    }
}
