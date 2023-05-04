import { useEffect, useState } from "react";

import { Channels } from '../interfaces/discord';
import DiscordChannel from "../components/DiscordChannel";

export default function PairedEntities() {
    async function getDiscordChannelList(): Promise<Channels | undefined> {
        const request = await fetch('/api/discord_channels');

        if (request.status === 404) return undefined;

        const response = await request.json();

        return response;
    }

    const [discordChannels, setDiscordChannels] = useState<string[]>([])

    useEffect(() => {
        (async () => {
            const channels = await getDiscordChannelList();

            if (!channels) {
                return;
            };

            setDiscordChannels(Object.keys(channels));
        })();
    }, [])


    return (
        <div className="paired_server_page">
            <p className="title">Discord Channels</p>

            <div className="pairedServers">
                {discordChannels.map((name) => {
                    return <DiscordChannel name={name}  />
                })}
            </div>
        </div>
    )
}
