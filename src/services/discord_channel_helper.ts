import { Channels, GetChannelQuery } from '../interfaces/discord';

import { Channel, Client, TextChannel } from "discord.js";
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const fileSavePath = join(process.cwd(), 'priv/discord_channels.json');

class DiscordChannelHelper {
    private channels: Channels;
    private client: Client | undefined;

    constructor() {
        this.channels = this.loadChannelFile() || {};
        this.client = undefined;
    }

    loadClient(client: Client) {
        this.client = client;
    }

    loadChannelFile(): Channels | undefined {
        if (existsSync(fileSavePath)) {
            return JSON.parse(readFileSync(fileSavePath, 'utf-8'));
        }
    }

    saveChannelFile() {
        writeFileSync(fileSavePath, JSON.stringify(this.channels));
    }

    get(query: GetChannelQuery): Channel | undefined {
        if (!this.client) {
            throw new Error('Discord client has not been connected');
        }

        if (!query.id || !query.name) {
            console.log('Must pass a query option and value { name | id }');
            return;
        }

        if (query.id) {
            const channel = this.client.channels.cache.get(query.id);

            if (!channel) return;

            return <TextChannel> channel;
        }

        const channelId = this.channels[query.name];
        const channel = this.client.channels.cache.get(channelId);

        if (!channel) return;

        return channel;
    }

    sendMessage(channelName: string, message: string) {
        if (!this.client) {
            throw new Error('Discord client has not been connected.');
        }

        const channelId = this.channels[channelName];

        if (!channelId) return;

        const channel = this.client.channels.cache.get(channelId);

        if (channel?.isTextBased()) {
            (<TextChannel> channel).send(message);
        }
    }

    add(name: string, id: string) {
        if (this.channels[name]) {
            console.log(`Duplicate channel name [${name}] found. Did you mean .update([name], [id])?`);
            return;
        }

        this.channels[name] = id;
        this.saveChannelFile();
    }

    remove(query: GetChannelQuery) {
        if (!query.id || !query.name) return;

        if (query.id) {
            const name = Object.keys(this.channels).find(channel => this.channels[channel] === query.id);

            if (!name) return;

            delete this.channels[name];
            this.saveChannelFile();
        }

        delete this.channels[query.name];
        this.saveChannelFile();
    }

    update(name: string, id: string) {
        // Duplicate of add(), but will possibly save a few headaches
        this.channels[name] = id;
        this.saveChannelFile();
    }
}

export default new DiscordChannelHelper();
