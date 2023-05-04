import { useEffect, useState } from "react";
import { Entity, EntityList } from '../interfaces/pairedEntities';

import PairedEntityCard from "../components/PairedEntity";

export default function PairedEntities() {
    async function getPairedEntitiesList(): Promise<EntityList | undefined> {
        const request = await fetch('/api/paired_entities');

        console.log(request.status)

        if (request.status === 404) return undefined;

        const response = await request.json();

        return response;
    }

    const [pairedEntities, setPairedEntities] = useState<Entity[]>([])

    useEffect(() => {
        (async () => {
            const entities = await getPairedEntitiesList();

            if (!entities) {
                return;
            };

            setPairedEntities(entities.entities);
        })();
    }, [])


    return (
        <div className="paired_server_page">
            <p className="title">Paired Entities</p>

            <div className="pairedServers">
                {pairedEntities.map((entity) => {
                    return <PairedEntityCard entityName={entity.entityName} entityId={entity.entityId} id={entity.id} entityType={entity.entityType} />
                })}
            </div>
        </div>
    )
}
