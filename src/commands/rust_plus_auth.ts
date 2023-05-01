import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../interfaces/discordCommand';

import rust_plus_auth from '../services/rust_plus_auth';

let server_close_timer: null | ReturnType<typeof setTimeout> = null;

export const rustauth: Command = {
    cooldown: 600,
    data: new SlashCommandBuilder()
        .setName('rust_auth')
        .setDescription('Paste the login link for rust+'),
    run: async (interaction) => {
        await interaction.deferReply();

        if (server_close_timer !== null) {
            await interaction.followUp({ content: 'Server already waiting...', ephemeral: true });

            return;
        }

        await rust_plus_auth.start();

        rust_plus_auth.onRegistered = async () => {
            server_close_timer = null;

            rust_plus_auth.stop();

            await interaction.deleteReply();
            await interaction.followUp({ content: 'Auth complete', ephemeral: true });
        }

        server_close_timer = setTimeout(async () => {
            await rust_plus_auth.stop();

            await interaction.deleteReply();
            await interaction.followUp({ content: 'Server stopped....', ephemeral: true });

            server_close_timer = null;
        }, 600000)


        await interaction.followUp(`${rust_plus_auth.link}, server closing in 10 minutes`);
    }
}

export const stoprustauth: Command = {
    data: new SlashCommandBuilder()
        .setName('stop_rust_auth')
        .setDescription('Paste the login link for rust+'),
    run: async (interaction) => {
        if (server_close_timer !== null) {
            await rust_plus_auth.stop();

            clearTimeout(server_close_timer);
        }

        await rust_plus_auth.stop();

        await interaction.reply({ content: 'Rust plus auth server stopped..', ephemeral: true });
    }
}
