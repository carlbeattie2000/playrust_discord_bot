import { SlashCommandBuilder } from '@discordjs/builders';

import { Command } from '../interfaces/discordCommand';
import mToDHMS from '../utils/millisecondsToDHMS';

function isDayThursday(date: Date): boolean {
    if (date.getUTCDay() === 4) return true;

    return false;
}

function findFirstThursdayOfMonth(date: Date): Date {
    let foundDate = false;
    let useCurrentMonth = false;

    if (date.getDate() < 6)
        if (date.getDay() < 4)
            useCurrentMonth = true;

    if (!useCurrentMonth) {
        date.setMonth(date.getMonth() + 1);
        date.setUTCDate(1);
    }

    while (!foundDate) {
        if (isDayThursday(date)) {
            foundDate = true;
        }

        if (foundDate) break;

        date.setDate(date.getDate() + 1);
    }

    return date;
}

export const forcewipe: Command = {
    cooldown: 240,
    data: new SlashCommandBuilder()
        .setName('forcewipe')
        .setDescription('Gives the date and time of the next force wipe.'),
    run: async (interaction) => {
        const date: Date = findFirstThursdayOfMonth(new Date());
        date.setHours(20);
        date.setMinutes(30);

        const dateNow: Date = new Date();

        const millisecondsUntilWipe: number = date.getTime() - dateNow.getTime();

        const timeLeftInDHMS = mToDHMS(millisecondsUntilWipe);

        const forceWipeDateMessage = `Next forcewipe is on the: ${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()} @20:30 BST.`;
        const timeRemaingMessage = `Days left until wipe: ${timeLeftInDHMS.days}d:${timeLeftInDHMS.hours}hr:${timeLeftInDHMS.minutes}m`;

        const replyMessage = `${forceWipeDateMessage}\n${timeRemaingMessage}`;

        interaction.reply(replyMessage);
    }
}
