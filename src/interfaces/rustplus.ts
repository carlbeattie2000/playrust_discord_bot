import RustPlus from '../services/rust_plus';
import { AppSetEntityValue, AppSendMessage, AppEmpty, AppMessage } from '../static/rustplus.proto';

export interface MessageRequestData {
    entityId?: number,
    setEntityValue?: AppSetEntityValue,
    sendTeamMessage?: AppSendMessage,
    getEntityInfo?: AppEmpty | undefined,
    getMap?: AppEmpty | undefined,
    getTime?: AppEmpty | undefined,
    getMapMarkers?: AppEmpty | undefined,
    getInfo?: AppEmpty | undefined,
    getTeamInfo?: AppEmpty | undefined
}

export interface SocketConnection {
    serverId: string,
    connection: RustPlus
}

export interface EntityFile {
    entities: Entity[]
}

export interface Entity {
    entityType: string,
    entityId: string,
    entityName: string,
    id: string,
}

export interface ChatCommand {
    command: string,
    onRun(rustPlusConnection: RustPlus, args: string[]): void,
    onMessage(rustPlusConnection: RustPlus, message: AppMessage): void
}

export interface ChatCommandKeyV {
    [command: string]: {
        onRun(rustPlusConnection: RustPlus, args: string[]): void,
    }
}
