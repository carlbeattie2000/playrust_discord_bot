import { useEffect, useState } from "react";
import { PairedServer, PairedServersConfig } from "../interfaces/pairedServers";
import PairedServerCard from "../components/PairedServer";

export default function PairedServers() {
    async function getPairedServersList(): Promise<PairedServersConfig | undefined> {
        const request = await fetch('/api/paired_servers');

        console.log(request.status)

        if (request.status === 404) return undefined;

        const response = await request.json();

        return response;
    }

    const [pairedServers, setPairedServers] = useState<PairedServer[]>([])

    useEffect(() => {
        (async () => {
            const servers = await getPairedServersList()

            if (!servers) {
                return;
            };

            setPairedServers(servers.servers);
        })();
    }, [])


    return (
        <div className="paired_server_page">
            <p className="title">Paired servers</p>

            <div className="pairedServers">
                {pairedServers.map((server) => {
                    return <PairedServerCard ip={server.ip} port={server.port} name={server.name} id={server.id} playerId={server.playerId} playerToken={server.playerToken}  />
                })}
            </div>
        </div>
    )
}
