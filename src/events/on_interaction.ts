import { BaseInteraction } from 'discord.js';

import commands from '../commands/_command_list';

interface cooldowns {
    [command: string]: number,
}

const cooldownws: cooldowns = {};

export const onInteraction = async (interaction: BaseInteraction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = commands[interaction.commandName];

    if (!command) {
        console.error('No command matching');
        return;
    }

    if (command.cooldown) {
        if (cooldownws[command.data.name]) {
            const timeNow = new Date().getTime();

            const cooldownSecondsToMilliseconds = command.cooldown * 1000;

            if (timeNow - cooldownws[command.data.name] < cooldownSecondsToMilliseconds) {
                await interaction.reply({
                    content: 'This command is on cooldown.',
                    ephemeral: true,
                });

                return;
            }

            delete cooldownws[command.data.name];
        }
    }

    try {
        await command.run(interaction);

        if (command.cooldown) {
            cooldownws[command.data.name] = new Date().getTime();
        }
    } catch (error) {
        console.error(error);

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: 'There was an error while executing this command',
                ephemeral: true
            })

            return;
        }

        await interaction.reply({
            content: 'There was an error while executing this command',
            ephemeral: true
        })
    }
}
