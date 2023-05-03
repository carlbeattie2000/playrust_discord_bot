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
