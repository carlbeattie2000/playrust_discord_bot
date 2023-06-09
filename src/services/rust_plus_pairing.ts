import { PairedServer, PairedServersConfig } from '../interfaces/pairedServer';
import AuthConfig from "../interfaces/authConfig";

import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { listen } from 'push-receiver';
import { Client } from "discord.js";

import rust_plus_auth from "./rust_plus_auth";
import discord_channel_helper from './discord_channel_helper';
import { Entity, EntityFile } from '../interfaces/rustplus';
import { connectToSocket } from './rust_plus_events';

function onFcmMessage(client: Client, { notification, persistentId }: any) {
    if (notificationIdExists(persistentId)) return;

    const body = JSON.parse(notification.data.body);

    let msg = '';

    if (body.type === 'server') {
        savePairedServer(body);
        connectToSocket(body);

        msg = `Discord paired with server: ${body.name}`;
    }

    if (body.type === 'entity') {
        msg = `Discord paired with: ${body.entityName}`;

        pairEntity(body);
    }

    if (msg === '') return;

    discord_channel_helper.sendMessage('general', msg);

    savePersistentId(persistentId);
}

async function fcmListen(client: Client) {
    const authConfigFile: AuthConfig | undefined = rust_plus_auth.getAuthConfig();

    if (authConfigFile === undefined) {
        console.log('Please use /rust_auth to pair rust+ with the bot.')

        return;
    }

    await listen(authConfigFile.fcm_credientals, ({ notification, persistentId }: any) => {
        onFcmMessage(client, { notification, persistentId });
    })
}

function serverAlreadyPaired(pairingServer: PairedServer, pairedServers: PairedServer[]): boolean {
    return pairedServers.find((server) => server.id === pairingServer.id) ? true : false;
}

function savePairedServer(pairedServer: PairedServer) {
    const saveFilePath = join(process.cwd(), 'priv/paired_servers.json');

    const savedServers: PairedServersConfig | undefined = loadPairedServers();

    if (!savedServers) {
        return writeFileSync(saveFilePath, JSON.stringify({
            servers: [ pairedServer ],
            persistentIds: [],
        }));
    }

    if (serverAlreadyPaired(pairedServer, savedServers.servers)) {
        return;
    }

    savedServers.servers.push(pairedServer);

    writeFileSync(saveFilePath, JSON.stringify(savedServers));
}

function updatePairedServerFile(configData: PairedServersConfig) {
    if (!configData) return;

    const saveFilePath = join(process.cwd(), 'priv/paired_servers.json');

    writeFileSync(saveFilePath, JSON.stringify(configData));
}

function savePersistentId(id: string) {
    const saveFilePath = join(process.cwd(), 'priv/paired_servers.json');

    const savedServers = loadPairedServers();

    if (!savedServers) return;

    if (notificationIdExists(id)) return;

    savedServers.persistentIds.push(id);

    writeFileSync(saveFilePath, JSON.stringify(savedServers));
}

function notificationIdExists(id: string): boolean {
    const savedServers = loadPairedServers();

    if (!savedServers) return false;

    if (savedServers.persistentIds.includes(id)) return true;

    return false;
}

export function loadPairedServers(): PairedServersConfig | undefined {
    const filePath = join(process.cwd(), 'priv/paired_servers.json');

    if (existsSync(filePath)) {
        return JSON.parse(readFileSync(filePath, 'utf-8'));
    }

    return undefined;
}

export function unpairServer(id: string): boolean {
    const pairedServers = loadPairedServers();

    if (!pairedServers) return false;

    const serverToRemove = pairedServers.servers.find((server) => server.id === id);

    if (!serverToRemove) return false;

    pairedServers.servers = pairedServers.servers.filter((server) => server.id !== id);

    updatePairedServerFile(pairedServers);

    return true;
}

export function loadSavedEntities(): EntityFile | undefined {
    const filePath = join(process.cwd(), 'priv/paired_entities.json');

    if (!existsSync(filePath)) return;

    const entites = JSON.parse(readFileSync(filePath, 'utf-8'));

    return entites;
}

function entityAlreadyPaired(id: string, savedEntites: EntityFile | undefined): boolean {
    if (savedEntites) {
        return savedEntites.entities.find((entity) => entity.entityId === id) !== undefined;
    }

    return false;
}

function saveEntityToFile(entity: Entity) {
    const fileSavePath = join(process.cwd(), 'priv/paired_entities.json');

    const savedEntites = loadSavedEntities();

    if (!savedEntites) {
        return writeFileSync(fileSavePath, JSON.stringify({ 'entities': [entity] }));
    }

    if (entityAlreadyPaired(entity.entityId, savedEntites)) {
        return;
    }

    savedEntites.entities.push(entity);

    writeFileSync(fileSavePath, JSON.stringify(savedEntites));
}

function pairEntity(entity: Entity) {
    saveEntityToFile(entity);
}

export function getEntityById(entityId: string): Entity | undefined {
    const savedEntities = loadSavedEntities();

    if (!savedEntities) return;

    return savedEntities.entities.find((entity) => entity.entityId === entityId);
}

export default fcmListen
