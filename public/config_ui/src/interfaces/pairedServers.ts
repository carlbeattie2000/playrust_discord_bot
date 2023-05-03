export interface PairedServer {
    port: string,
    ip: string,
    name: string,
    id: string,
    playerId: string,
    playerToken: string
}

export interface PairedServersConfig {
    servers: PairedServer[],
    persistentIds: string[]
}
