export interface MessageRequestData {
    entityId?: string,
    setEntityValue?: {
        value: number | boolean
    },
    sendTeamMessage?: {
        message: string,
    }
    getEntityInfo?: Object,
    getMap?: Object,
    getTime?: Object,
    getMapMarkers?: Object,
    getInfo?: Object,
    getTeamInfo?: Object
}
