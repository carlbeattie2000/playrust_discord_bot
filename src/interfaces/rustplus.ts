import RustPlus from '../services/rust_plus';
import { AppSetEntityValue, AppSendMessage, AppEmpty } from '../static/rustplus.proto';

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
