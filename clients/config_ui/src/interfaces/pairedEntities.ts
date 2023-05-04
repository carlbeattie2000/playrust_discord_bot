export interface Entity {
    entityType: string,
    entityId: string,
    entityName: string,
    id: string,
}

export interface EntityList {
    entities: Entity[]
}
