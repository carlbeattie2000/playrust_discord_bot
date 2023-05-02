/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "rustplus";

export enum AppEntityType {
  Switch = 1,
  Alarm = 2,
  StorageMonitor = 3,
  UNRECOGNIZED = -1,
}

export function appEntityTypeFromJSON(object: any): AppEntityType {
  switch (object) {
    case 1:
    case "Switch":
      return AppEntityType.Switch;
    case 2:
    case "Alarm":
      return AppEntityType.Alarm;
    case 3:
    case "StorageMonitor":
      return AppEntityType.StorageMonitor;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AppEntityType.UNRECOGNIZED;
  }
}

export function appEntityTypeToJSON(object: AppEntityType): string {
  switch (object) {
    case AppEntityType.Switch:
      return "Switch";
    case AppEntityType.Alarm:
      return "Alarm";
    case AppEntityType.StorageMonitor:
      return "StorageMonitor";
    case AppEntityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum AppMarkerType {
  Undefined = 0,
  Player = 1,
  Explosion = 2,
  VendingMachine = 3,
  CH47 = 4,
  CargoShip = 5,
  Crate = 6,
  GenericRadius = 7,
  PatrolHelicopter = 8,
  UNRECOGNIZED = -1,
}

export function appMarkerTypeFromJSON(object: any): AppMarkerType {
  switch (object) {
    case 0:
    case "Undefined":
      return AppMarkerType.Undefined;
    case 1:
    case "Player":
      return AppMarkerType.Player;
    case 2:
    case "Explosion":
      return AppMarkerType.Explosion;
    case 3:
    case "VendingMachine":
      return AppMarkerType.VendingMachine;
    case 4:
    case "CH47":
      return AppMarkerType.CH47;
    case 5:
    case "CargoShip":
      return AppMarkerType.CargoShip;
    case 6:
    case "Crate":
      return AppMarkerType.Crate;
    case 7:
    case "GenericRadius":
      return AppMarkerType.GenericRadius;
    case 8:
    case "PatrolHelicopter":
      return AppMarkerType.PatrolHelicopter;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AppMarkerType.UNRECOGNIZED;
  }
}

export function appMarkerTypeToJSON(object: AppMarkerType): string {
  switch (object) {
    case AppMarkerType.Undefined:
      return "Undefined";
    case AppMarkerType.Player:
      return "Player";
    case AppMarkerType.Explosion:
      return "Explosion";
    case AppMarkerType.VendingMachine:
      return "VendingMachine";
    case AppMarkerType.CH47:
      return "CH47";
    case AppMarkerType.CargoShip:
      return "CargoShip";
    case AppMarkerType.Crate:
      return "Crate";
    case AppMarkerType.GenericRadius:
      return "GenericRadius";
    case AppMarkerType.PatrolHelicopter:
      return "PatrolHelicopter";
    case AppMarkerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Vector2 {
  x: number;
  y: number;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Vector4 {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface Half3 {
  x: number;
  y: number;
  z: number;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Ray {
  origin: Vector3 | undefined;
  direction: Vector3 | undefined;
}

export interface ClanActionResult {
  requestId: number;
  result: number;
  hasClanInfo: boolean;
  clanInfo: ClanInfo | undefined;
}

export interface ClanInfo {
  clanId: number;
  name: string;
  created: number;
  creator: number;
  motd: string;
  motdTimestamp: number;
  motdAuthor: number;
  logo: Uint8Array;
  color: number;
  roles: ClanInfo_Role[];
  members: ClanInfo_Member[];
  invites: ClanInfo_Invite[];
  maxMemberCount: number;
}

export interface ClanInfo_Role {
  roleId: number;
  rank: number;
  name: string;
  canSetMotd: boolean;
  canSetLogo: boolean;
  canInvite: boolean;
  canKick: boolean;
  canPromote: boolean;
  canDemote: boolean;
  canSetPlayerNotes: boolean;
  canAccessLogs: boolean;
}

export interface ClanInfo_Member {
  steamId: number;
  roleId: number;
  joined: number;
  lastSeen: number;
  notes: string;
  online: boolean;
}

export interface ClanInfo_Invite {
  steamId: number;
  recruiter: number;
  timestamp: number;
}

export interface ClanLog {
  clanId: number;
  logEntries: ClanLog_Entry[];
}

export interface ClanLog_Entry {
  timestamp: number;
  eventKey: string;
  arg1: string;
  arg2: string;
  arg3: string;
  arg4: string;
}

export interface ClanInvitations {
  invitations: ClanInvitations_Invitation[];
}

export interface ClanInvitations_Invitation {
  clanId: number;
  recruiter: number;
  timestamp: number;
}

export interface AppRequest {
  seq: number;
  playerId: number;
  playerToken: number;
  entityId: number;
  getInfo: AppEmpty | undefined;
  getTime: AppEmpty | undefined;
  getMap: AppEmpty | undefined;
  getTeamInfo: AppEmpty | undefined;
  getTeamChat: AppEmpty | undefined;
  sendTeamMessage: AppSendMessage | undefined;
  getEntityInfo: AppEmpty | undefined;
  setEntityValue: AppSetEntityValue | undefined;
  checkSubscription: AppEmpty | undefined;
  setSubscription: AppFlag | undefined;
  getMapMarkers: AppEmpty | undefined;
  promoteToLeader: AppPromoteToLeader | undefined;
  getClanInfo: AppEmpty | undefined;
  setClanMotd: AppSendMessage | undefined;
  getClanChat: AppEmpty | undefined;
  sendClanMessage: AppSendMessage | undefined;
  getNexusAuth: AppGetNexusAuth | undefined;
  cameraSubscribe: AppCameraSubscribe | undefined;
  cameraUnsubscribe: AppEmpty | undefined;
  cameraInput: AppCameraInput | undefined;
}

export interface AppMessage {
  response: AppResponse | undefined;
  broadcast: AppBroadcast | undefined;
}

export interface AppResponse {
  seq: number;
  success: AppSuccess | undefined;
  error: AppError | undefined;
  info: AppInfo | undefined;
  time: AppTime | undefined;
  map: AppMap | undefined;
  teamInfo: AppTeamInfo | undefined;
  teamChat: AppTeamChat | undefined;
  entityInfo: AppEntityInfo | undefined;
  flag: AppFlag | undefined;
  mapMarkers: AppMapMarkers | undefined;
  clanInfo: AppClanInfo | undefined;
  clanChat: AppClanChat | undefined;
  nexusAuth: AppNexusAuth | undefined;
  cameraSubscribeInfo: AppCameraInfo | undefined;
}

export interface AppBroadcast {
  teamChanged: AppTeamChanged | undefined;
  teamMessage: AppNewTeamMessage | undefined;
  entityChanged: AppEntityChanged | undefined;
  clanChanged: AppClanChanged | undefined;
  clanMessage: AppNewClanMessage | undefined;
  cameraRays: AppCameraRays | undefined;
}

export interface AppEmpty {
}

export interface AppSendMessage {
  message: string;
}

export interface AppSetEntityValue {
  value: boolean;
}

export interface AppPromoteToLeader {
  steamId: number;
}

export interface AppGetNexusAuth {
  appKey: string;
}

export interface AppSuccess {
}

export interface AppError {
  error: string;
}

export interface AppFlag {
  value: boolean;
}

export interface AppInfo {
  name: string;
  headerImage: string;
  url: string;
  map: string;
  mapSize: number;
  wipeTime: number;
  players: number;
  maxPlayers: number;
  queuedPlayers: number;
  seed: number;
  salt: number;
  logoImage: string;
  nexus: string;
  nexusId: number;
  nexusZone: string;
}

export interface AppTime {
  dayLengthMinutes: number;
  timeScale: number;
  sunrise: number;
  sunset: number;
  time: number;
}

export interface AppMap {
  width: number;
  height: number;
  jpgImage: Uint8Array;
  oceanMargin: number;
  monuments: AppMap_Monument[];
  background: string;
}

export interface AppMap_Monument {
  token: string;
  x: number;
  y: number;
}

export interface AppEntityInfo {
  type: AppEntityType;
  payload: AppEntityPayload | undefined;
}

export interface AppEntityPayload {
  value: boolean;
  items: AppEntityPayload_Item[];
  capacity: number;
  hasProtection: boolean;
  protectionExpiry: number;
}

export interface AppEntityPayload_Item {
  itemId: number;
  quantity: number;
  itemIsBlueprint: boolean;
}

export interface AppTeamInfo {
  leaderSteamId: number;
  members: AppTeamInfo_Member[];
  mapNotes: AppTeamInfo_Note[];
  leaderMapNotes: AppTeamInfo_Note[];
}

export interface AppTeamInfo_Member {
  steamId: number;
  name: string;
  x: number;
  y: number;
  isOnline: boolean;
  spawnTime: number;
  isAlive: boolean;
  deathTime: number;
}

export interface AppTeamInfo_Note {
  type: number;
  x: number;
  y: number;
}

export interface AppTeamMessage {
  steamId: number;
  name: string;
  message: string;
  color: string;
  time: number;
}

export interface AppTeamChat {
  messages: AppTeamMessage[];
}

export interface AppMarker {
  id: number;
  type: AppMarkerType;
  x: number;
  y: number;
  steamId: number;
  rotation: number;
  radius: number;
  color1: Vector4 | undefined;
  color2: Vector4 | undefined;
  alpha: number;
  name: string;
  outOfStock: boolean;
  sellOrders: AppMarker_SellOrder[];
}

export interface AppMarker_SellOrder {
  itemId: number;
  quantity: number;
  currencyId: number;
  costPerItem: number;
  amountInStock: number;
  itemIsBlueprint: boolean;
  currencyIsBlueprint: boolean;
  itemCondition: number;
  itemConditionMax: number;
}

export interface AppMapMarkers {
  markers: AppMarker[];
}

export interface AppClanInfo {
  clanInfo: ClanInfo | undefined;
}

export interface AppClanMessage {
  steamId: number;
  name: string;
  message: string;
  time: number;
}

export interface AppClanChat {
  messages: AppClanMessage[];
}

export interface AppNexusAuth {
  serverId: string;
  playerToken: number;
}

export interface AppTeamChanged {
  playerId: number;
  teamInfo: AppTeamInfo | undefined;
}

export interface AppNewTeamMessage {
  message: AppTeamMessage | undefined;
}

export interface AppEntityChanged {
  entityId: number;
  payload: AppEntityPayload | undefined;
}

export interface AppClanChanged {
  clanInfo: ClanInfo | undefined;
}

export interface AppNewClanMessage {
  clanId: number;
  message: AppClanMessage | undefined;
}

export interface AppCameraSubscribe {
  cameraId: string;
}

export interface AppCameraInput {
  buttons: number;
  mouseDelta: Vector2 | undefined;
}

export interface AppCameraInfo {
  width: number;
  height: number;
  nearPlane: number;
  farPlane: number;
  controlFlags: number;
}

export interface AppCameraRays {
  verticalFov: number;
  sampleOffset: number;
  rayData: Uint8Array;
  distance: number;
  entities: AppCameraRays_Entity[];
}

export enum AppCameraRays_EntityType {
  Tree = 1,
  Player = 2,
  UNRECOGNIZED = -1,
}

export function appCameraRays_EntityTypeFromJSON(object: any): AppCameraRays_EntityType {
  switch (object) {
    case 1:
    case "Tree":
      return AppCameraRays_EntityType.Tree;
    case 2:
    case "Player":
      return AppCameraRays_EntityType.Player;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AppCameraRays_EntityType.UNRECOGNIZED;
  }
}

export function appCameraRays_EntityTypeToJSON(object: AppCameraRays_EntityType): string {
  switch (object) {
    case AppCameraRays_EntityType.Tree:
      return "Tree";
    case AppCameraRays_EntityType.Player:
      return "Player";
    case AppCameraRays_EntityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AppCameraRays_Entity {
  entityId: number;
  type: AppCameraRays_EntityType;
  position: Vector3 | undefined;
  rotation: Vector3 | undefined;
  size: Vector3 | undefined;
  name: string;
}

function createBaseVector2(): Vector2 {
  return { x: 0, y: 0 };
}

export const Vector2 = {
  encode(message: Vector2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vector2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVector2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vector2 {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: Vector2): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create<I extends Exact<DeepPartial<Vector2>, I>>(base?: I): Vector2 {
    return Vector2.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Vector2>, I>>(object: I): Vector2 {
    const message = createBaseVector2();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseVector3(): Vector3 {
  return { x: 0, y: 0, z: 0 };
}

export const Vector3 = {
  encode(message: Vector3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vector3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVector3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.z = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vector3 {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: Vector3): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  create<I extends Exact<DeepPartial<Vector3>, I>>(base?: I): Vector3 {
    return Vector3.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Vector3>, I>>(object: I): Vector3 {
    const message = createBaseVector3();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseVector4(): Vector4 {
  return { x: 0, y: 0, z: 0, w: 0 };
}

export const Vector4 = {
  encode(message: Vector4, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    if (message.w !== 0) {
      writer.uint32(37).float(message.w);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vector4 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVector4();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.z = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.w = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vector4 {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
      w: isSet(object.w) ? Number(object.w) : 0,
    };
  },

  toJSON(message: Vector4): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    message.w !== undefined && (obj.w = message.w);
    return obj;
  },

  create<I extends Exact<DeepPartial<Vector4>, I>>(base?: I): Vector4 {
    return Vector4.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Vector4>, I>>(object: I): Vector4 {
    const message = createBaseVector4();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    message.w = object.w ?? 0;
    return message;
  },
};

function createBaseHalf3(): Half3 {
  return { x: 0, y: 0, z: 0 };
}

export const Half3 = {
  encode(message: Half3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Half3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHalf3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.z = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Half3 {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: Half3): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  create<I extends Exact<DeepPartial<Half3>, I>>(base?: I): Half3 {
    return Half3.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Half3>, I>>(object: I): Half3 {
    const message = createBaseHalf3();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseColor(): Color {
  return { r: 0, g: 0, b: 0, a: 0 };
}

export const Color = {
  encode(message: Color, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.r !== 0) {
      writer.uint32(13).float(message.r);
    }
    if (message.g !== 0) {
      writer.uint32(21).float(message.g);
    }
    if (message.b !== 0) {
      writer.uint32(29).float(message.b);
    }
    if (message.a !== 0) {
      writer.uint32(37).float(message.a);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Color {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.r = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.g = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.b = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.a = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Color {
    return {
      r: isSet(object.r) ? Number(object.r) : 0,
      g: isSet(object.g) ? Number(object.g) : 0,
      b: isSet(object.b) ? Number(object.b) : 0,
      a: isSet(object.a) ? Number(object.a) : 0,
    };
  },

  toJSON(message: Color): unknown {
    const obj: any = {};
    message.r !== undefined && (obj.r = message.r);
    message.g !== undefined && (obj.g = message.g);
    message.b !== undefined && (obj.b = message.b);
    message.a !== undefined && (obj.a = message.a);
    return obj;
  },

  create<I extends Exact<DeepPartial<Color>, I>>(base?: I): Color {
    return Color.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Color>, I>>(object: I): Color {
    const message = createBaseColor();
    message.r = object.r ?? 0;
    message.g = object.g ?? 0;
    message.b = object.b ?? 0;
    message.a = object.a ?? 0;
    return message;
  },
};

function createBaseRay(): Ray {
  return { origin: undefined, direction: undefined };
}

export const Ray = {
  encode(message: Ray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      Vector3.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.direction !== undefined) {
      Vector3.encode(message.direction, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.origin = Vector3.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.direction = Vector3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Ray {
    return {
      origin: isSet(object.origin) ? Vector3.fromJSON(object.origin) : undefined,
      direction: isSet(object.direction) ? Vector3.fromJSON(object.direction) : undefined,
    };
  },

  toJSON(message: Ray): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? Vector3.toJSON(message.origin) : undefined);
    message.direction !== undefined &&
      (obj.direction = message.direction ? Vector3.toJSON(message.direction) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Ray>, I>>(base?: I): Ray {
    return Ray.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Ray>, I>>(object: I): Ray {
    const message = createBaseRay();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? Vector3.fromPartial(object.origin)
      : undefined;
    message.direction = (object.direction !== undefined && object.direction !== null)
      ? Vector3.fromPartial(object.direction)
      : undefined;
    return message;
  },
};

function createBaseClanActionResult(): ClanActionResult {
  return { requestId: 0, result: 0, hasClanInfo: false, clanInfo: undefined };
}

export const ClanActionResult = {
  encode(message: ClanActionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int32(message.requestId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.hasClanInfo === true) {
      writer.uint32(24).bool(message.hasClanInfo);
    }
    if (message.clanInfo !== undefined) {
      ClanInfo.encode(message.clanInfo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClanActionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClanActionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.requestId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.result = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hasClanInfo = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clanInfo = ClanInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClanActionResult {
    return {
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
      result: isSet(object.result) ? Number(object.result) : 0,
      hasClanInfo: isSet(object.hasClanInfo) ? Boolean(object.hasClanInfo) : false,
      clanInfo: isSet(object.clanInfo) ? ClanInfo.fromJSON(object.clanInfo) : undefined,
    };
  },

  toJSON(message: ClanActionResult): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.hasClanInfo !== undefined && (obj.hasClanInfo = message.hasClanInfo);
    message.clanInfo !== undefined && (obj.clanInfo = message.clanInfo ? ClanInfo.toJSON(message.clanInfo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClanActionResult>, I>>(base?: I): ClanActionResult {
    return ClanActionResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClanActionResult>, I>>(object: I): ClanActionResult {
    const message = createBaseClanActionResult();
    message.requestId = object.requestId ?? 0;
    message.result = object.result ?? 0;
    message.hasClanInfo = object.hasClanInfo ?? false;
    message.clanInfo = (object.clanInfo !== undefined && object.clanInfo !== null)
      ? ClanInfo.fromPartial(object.clanInfo)
      : undefined;
    return message;
  },
};

function createBaseClanInfo(): ClanInfo {
  return {
    clanId: 0,
    name: "",
    created: 0,
    creator: 0,
    motd: "",
    motdTimestamp: 0,
    motdAuthor: 0,
    logo: new Uint8Array(),
    color: 0,
    roles: [],
    members: [],
    invites: [],
    maxMemberCount: 0,
  };
}

export const ClanInfo = {
  encode(message: ClanInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clanId !== 0) {
      writer.uint32(8).int64(message.clanId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.created !== 0) {
      writer.uint32(24).int64(message.created);
    }
    if (message.creator !== 0) {
      writer.uint32(32).uint64(message.creator);
    }
    if (message.motd !== "") {
      writer.uint32(42).string(message.motd);
    }
    if (message.motdTimestamp !== 0) {
      writer.uint32(48).int64(message.motdTimestamp);
    }
    if (message.motdAuthor !== 0) {
      writer.uint32(56).uint64(message.motdAuthor);
    }
    if (message.logo.length !== 0) {
      writer.uint32(66).bytes(message.logo);
    }
    if (message.color !== 0) {
      writer.uint32(72).sint32(message.color);
    }
    for (const v of message.roles) {
      ClanInfo_Role.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.members) {
      ClanInfo_Member.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.invites) {
      ClanInfo_Invite.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.maxMemberCount !== 0) {
      writer.uint32(104).int32(message.maxMemberCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClanInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.clanId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.created = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.creator = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.motd = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.motdTimestamp = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.motdAuthor = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.logo = reader.bytes();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.color = reader.sint32();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.roles.push(ClanInfo_Role.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.members.push(ClanInfo_Member.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.invites.push(ClanInfo_Invite.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.maxMemberCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClanInfo {
    return {
      clanId: isSet(object.clanId) ? Number(object.clanId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      created: isSet(object.created) ? Number(object.created) : 0,
      creator: isSet(object.creator) ? Number(object.creator) : 0,
      motd: isSet(object.motd) ? String(object.motd) : "",
      motdTimestamp: isSet(object.motdTimestamp) ? Number(object.motdTimestamp) : 0,
      motdAuthor: isSet(object.motdAuthor) ? Number(object.motdAuthor) : 0,
      logo: isSet(object.logo) ? bytesFromBase64(object.logo) : new Uint8Array(),
      color: isSet(object.color) ? Number(object.color) : 0,
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => ClanInfo_Role.fromJSON(e)) : [],
      members: Array.isArray(object?.members) ? object.members.map((e: any) => ClanInfo_Member.fromJSON(e)) : [],
      invites: Array.isArray(object?.invites) ? object.invites.map((e: any) => ClanInfo_Invite.fromJSON(e)) : [],
      maxMemberCount: isSet(object.maxMemberCount) ? Number(object.maxMemberCount) : 0,
    };
  },

  toJSON(message: ClanInfo): unknown {
    const obj: any = {};
    message.clanId !== undefined && (obj.clanId = Math.round(message.clanId));
    message.name !== undefined && (obj.name = message.name);
    message.created !== undefined && (obj.created = Math.round(message.created));
    message.creator !== undefined && (obj.creator = Math.round(message.creator));
    message.motd !== undefined && (obj.motd = message.motd);
    message.motdTimestamp !== undefined && (obj.motdTimestamp = Math.round(message.motdTimestamp));
    message.motdAuthor !== undefined && (obj.motdAuthor = Math.round(message.motdAuthor));
    message.logo !== undefined &&
      (obj.logo = base64FromBytes(message.logo !== undefined ? message.logo : new Uint8Array()));
    message.color !== undefined && (obj.color = Math.round(message.color));
    if (message.roles) {
      obj.roles = message.roles.map((e) => e ? ClanInfo_Role.toJSON(e) : undefined);
    } else {
      obj.roles = [];
    }
    if (message.members) {
      obj.members = message.members.map((e) => e ? ClanInfo_Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    if (message.invites) {
      obj.invites = message.invites.map((e) => e ? ClanInfo_Invite.toJSON(e) : undefined);
    } else {
      obj.invites = [];
    }
    message.maxMemberCount !== undefined && (obj.maxMemberCount = Math.round(message.maxMemberCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<ClanInfo>, I>>(base?: I): ClanInfo {
    return ClanInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClanInfo>, I>>(object: I): ClanInfo {
    const message = createBaseClanInfo();
    message.clanId = object.clanId ?? 0;
    message.name = object.name ?? "";
    message.created = object.created ?? 0;
    message.creator = object.creator ?? 0;
    message.motd = object.motd ?? "";
    message.motdTimestamp = object.motdTimestamp ?? 0;
    message.motdAuthor = object.motdAuthor ?? 0;
    message.logo = object.logo ?? new Uint8Array();
    message.color = object.color ?? 0;
    message.roles = object.roles?.map((e) => ClanInfo_Role.fromPartial(e)) || [];
    message.members = object.members?.map((e) => ClanInfo_Member.fromPartial(e)) || [];
    message.invites = object.invites?.map((e) => ClanInfo_Invite.fromPartial(e)) || [];
    message.maxMemberCount = object.maxMemberCount ?? 0;
    return message;
  },
};

function createBaseClanInfo_Role(): ClanInfo_Role {
  return {
    roleId: 0,
    rank: 0,
    name: "",
    canSetMotd: false,
    canSetLogo: false,
    canInvite: false,
    canKick: false,
    canPromote: false,
    canDemote: false,
    canSetPlayerNotes: false,
    canAccessLogs: false,
  };
}

export const ClanInfo_Role = {
  encode(message: ClanInfo_Role, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleId !== 0) {
      writer.uint32(8).int32(message.roleId);
    }
    if (message.rank !== 0) {
      writer.uint32(16).int32(message.rank);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.canSetMotd === true) {
      writer.uint32(32).bool(message.canSetMotd);
    }
    if (message.canSetLogo === true) {
      writer.uint32(40).bool(message.canSetLogo);
    }
    if (message.canInvite === true) {
      writer.uint32(48).bool(message.canInvite);
    }
    if (message.canKick === true) {
      writer.uint32(56).bool(message.canKick);
    }
    if (message.canPromote === true) {
      writer.uint32(64).bool(message.canPromote);
    }
    if (message.canDemote === true) {
      writer.uint32(72).bool(message.canDemote);
    }
    if (message.canSetPlayerNotes === true) {
      writer.uint32(80).bool(message.canSetPlayerNotes);
    }
    if (message.canAccessLogs === true) {
      writer.uint32(88).bool(message.canAccessLogs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo_Role {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClanInfo_Role();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.roleId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rank = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.canSetMotd = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.canSetLogo = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.canInvite = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.canKick = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.canPromote = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.canDemote = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.canSetPlayerNotes = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.canAccessLogs = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClanInfo_Role {
    return {
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      canSetMotd: isSet(object.canSetMotd) ? Boolean(object.canSetMotd) : false,
      canSetLogo: isSet(object.canSetLogo) ? Boolean(object.canSetLogo) : false,
      canInvite: isSet(object.canInvite) ? Boolean(object.canInvite) : false,
      canKick: isSet(object.canKick) ? Boolean(object.canKick) : false,
      canPromote: isSet(object.canPromote) ? Boolean(object.canPromote) : false,
      canDemote: isSet(object.canDemote) ? Boolean(object.canDemote) : false,
      canSetPlayerNotes: isSet(object.canSetPlayerNotes) ? Boolean(object.canSetPlayerNotes) : false,
      canAccessLogs: isSet(object.canAccessLogs) ? Boolean(object.canAccessLogs) : false,
    };
  },

  toJSON(message: ClanInfo_Role): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.name !== undefined && (obj.name = message.name);
    message.canSetMotd !== undefined && (obj.canSetMotd = message.canSetMotd);
    message.canSetLogo !== undefined && (obj.canSetLogo = message.canSetLogo);
    message.canInvite !== undefined && (obj.canInvite = message.canInvite);
    message.canKick !== undefined && (obj.canKick = message.canKick);
    message.canPromote !== undefined && (obj.canPromote = message.canPromote);
    message.canDemote !== undefined && (obj.canDemote = message.canDemote);
    message.canSetPlayerNotes !== undefined && (obj.canSetPlayerNotes = message.canSetPlayerNotes);
    message.canAccessLogs !== undefined && (obj.canAccessLogs = message.canAccessLogs);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClanInfo_Role>, I>>(base?: I): ClanInfo_Role {
    return ClanInfo_Role.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClanInfo_Role>, I>>(object: I): ClanInfo_Role {
    const message = createBaseClanInfo_Role();
    message.roleId = object.roleId ?? 0;
    message.rank = object.rank ?? 0;
    message.name = object.name ?? "";
    message.canSetMotd = object.canSetMotd ?? false;
    message.canSetLogo = object.canSetLogo ?? false;
    message.canInvite = object.canInvite ?? false;
    message.canKick = object.canKick ?? false;
    message.canPromote = object.canPromote ?? false;
    message.canDemote = object.canDemote ?? false;
    message.canSetPlayerNotes = object.canSetPlayerNotes ?? false;
    message.canAccessLogs = object.canAccessLogs ?? false;
    return message;
  },
};

function createBaseClanInfo_Member(): ClanInfo_Member {
  return { steamId: 0, roleId: 0, joined: 0, lastSeen: 0, notes: "", online: false };
}

export const ClanInfo_Member = {
  encode(message: ClanInfo_Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(8).uint64(message.steamId);
    }
    if (message.roleId !== 0) {
      writer.uint32(16).int32(message.roleId);
    }
    if (message.joined !== 0) {
      writer.uint32(24).int64(message.joined);
    }
    if (message.lastSeen !== 0) {
      writer.uint32(32).int64(message.lastSeen);
    }
    if (message.notes !== "") {
      writer.uint32(42).string(message.notes);
    }
    if (message.online === true) {
      writer.uint32(48).bool(message.online);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo_Member {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClanInfo_Member();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.steamId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.roleId = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.joined = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lastSeen = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.notes = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.online = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClanInfo_Member {
    return {
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      joined: isSet(object.joined) ? Number(object.joined) : 0,
      lastSeen: isSet(object.lastSeen) ? Number(object.lastSeen) : 0,
      notes: isSet(object.notes) ? String(object.notes) : "",
      online: isSet(object.online) ? Boolean(object.online) : false,
    };
  },

  toJSON(message: ClanInfo_Member): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.joined !== undefined && (obj.joined = Math.round(message.joined));
    message.lastSeen !== undefined && (obj.lastSeen = Math.round(message.lastSeen));
    message.notes !== undefined && (obj.notes = message.notes);
    message.online !== undefined && (obj.online = message.online);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClanInfo_Member>, I>>(base?: I): ClanInfo_Member {
    return ClanInfo_Member.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClanInfo_Member>, I>>(object: I): ClanInfo_Member {
    const message = createBaseClanInfo_Member();
    message.steamId = object.steamId ?? 0;
    message.roleId = object.roleId ?? 0;
    message.joined = object.joined ?? 0;
    message.lastSeen = object.lastSeen ?? 0;
    message.notes = object.notes ?? "";
    message.online = object.online ?? false;
    return message;
  },
};

function createBaseClanInfo_Invite(): ClanInfo_Invite {
  return { steamId: 0, recruiter: 0, timestamp: 0 };
}

export const ClanInfo_Invite = {
  encode(message: ClanInfo_Invite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(8).uint64(message.steamId);
    }
    if (message.recruiter !== 0) {
      writer.uint32(16).uint64(message.recruiter);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo_Invite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClanInfo_Invite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.steamId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.recruiter = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timestamp = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClanInfo_Invite {
    return {
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      recruiter: isSet(object.recruiter) ? Number(object.recruiter) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: ClanInfo_Invite): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.recruiter !== undefined && (obj.recruiter = Math.round(message.recruiter));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<ClanInfo_Invite>, I>>(base?: I): ClanInfo_Invite {
    return ClanInfo_Invite.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClanInfo_Invite>, I>>(object: I): ClanInfo_Invite {
    const message = createBaseClanInfo_Invite();
    message.steamId = object.steamId ?? 0;
    message.recruiter = object.recruiter ?? 0;
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseClanLog(): ClanLog {
  return { clanId: 0, logEntries: [] };
}

export const ClanLog = {
  encode(message: ClanLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clanId !== 0) {
      writer.uint32(8).int64(message.clanId);
    }
    for (const v of message.logEntries) {
      ClanLog_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClanLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClanLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.clanId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logEntries.push(ClanLog_Entry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClanLog {
    return {
      clanId: isSet(object.clanId) ? Number(object.clanId) : 0,
      logEntries: Array.isArray(object?.logEntries) ? object.logEntries.map((e: any) => ClanLog_Entry.fromJSON(e)) : [],
    };
  },

  toJSON(message: ClanLog): unknown {
    const obj: any = {};
    message.clanId !== undefined && (obj.clanId = Math.round(message.clanId));
    if (message.logEntries) {
      obj.logEntries = message.logEntries.map((e) => e ? ClanLog_Entry.toJSON(e) : undefined);
    } else {
      obj.logEntries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClanLog>, I>>(base?: I): ClanLog {
    return ClanLog.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClanLog>, I>>(object: I): ClanLog {
    const message = createBaseClanLog();
    message.clanId = object.clanId ?? 0;
    message.logEntries = object.logEntries?.map((e) => ClanLog_Entry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClanLog_Entry(): ClanLog_Entry {
  return { timestamp: 0, eventKey: "", arg1: "", arg2: "", arg3: "", arg4: "" };
}

export const ClanLog_Entry = {
  encode(message: ClanLog_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.eventKey !== "") {
      writer.uint32(18).string(message.eventKey);
    }
    if (message.arg1 !== "") {
      writer.uint32(26).string(message.arg1);
    }
    if (message.arg2 !== "") {
      writer.uint32(34).string(message.arg2);
    }
    if (message.arg3 !== "") {
      writer.uint32(42).string(message.arg3);
    }
    if (message.arg4 !== "") {
      writer.uint32(50).string(message.arg4);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClanLog_Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClanLog_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eventKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.arg1 = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.arg2 = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.arg3 = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.arg4 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClanLog_Entry {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      eventKey: isSet(object.eventKey) ? String(object.eventKey) : "",
      arg1: isSet(object.arg1) ? String(object.arg1) : "",
      arg2: isSet(object.arg2) ? String(object.arg2) : "",
      arg3: isSet(object.arg3) ? String(object.arg3) : "",
      arg4: isSet(object.arg4) ? String(object.arg4) : "",
    };
  },

  toJSON(message: ClanLog_Entry): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.eventKey !== undefined && (obj.eventKey = message.eventKey);
    message.arg1 !== undefined && (obj.arg1 = message.arg1);
    message.arg2 !== undefined && (obj.arg2 = message.arg2);
    message.arg3 !== undefined && (obj.arg3 = message.arg3);
    message.arg4 !== undefined && (obj.arg4 = message.arg4);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClanLog_Entry>, I>>(base?: I): ClanLog_Entry {
    return ClanLog_Entry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClanLog_Entry>, I>>(object: I): ClanLog_Entry {
    const message = createBaseClanLog_Entry();
    message.timestamp = object.timestamp ?? 0;
    message.eventKey = object.eventKey ?? "";
    message.arg1 = object.arg1 ?? "";
    message.arg2 = object.arg2 ?? "";
    message.arg3 = object.arg3 ?? "";
    message.arg4 = object.arg4 ?? "";
    return message;
  },
};

function createBaseClanInvitations(): ClanInvitations {
  return { invitations: [] };
}

export const ClanInvitations = {
  encode(message: ClanInvitations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.invitations) {
      ClanInvitations_Invitation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClanInvitations {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClanInvitations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.invitations.push(ClanInvitations_Invitation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClanInvitations {
    return {
      invitations: Array.isArray(object?.invitations)
        ? object.invitations.map((e: any) => ClanInvitations_Invitation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClanInvitations): unknown {
    const obj: any = {};
    if (message.invitations) {
      obj.invitations = message.invitations.map((e) => e ? ClanInvitations_Invitation.toJSON(e) : undefined);
    } else {
      obj.invitations = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClanInvitations>, I>>(base?: I): ClanInvitations {
    return ClanInvitations.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClanInvitations>, I>>(object: I): ClanInvitations {
    const message = createBaseClanInvitations();
    message.invitations = object.invitations?.map((e) => ClanInvitations_Invitation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClanInvitations_Invitation(): ClanInvitations_Invitation {
  return { clanId: 0, recruiter: 0, timestamp: 0 };
}

export const ClanInvitations_Invitation = {
  encode(message: ClanInvitations_Invitation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clanId !== 0) {
      writer.uint32(8).int64(message.clanId);
    }
    if (message.recruiter !== 0) {
      writer.uint32(16).uint64(message.recruiter);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClanInvitations_Invitation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClanInvitations_Invitation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.clanId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.recruiter = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timestamp = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClanInvitations_Invitation {
    return {
      clanId: isSet(object.clanId) ? Number(object.clanId) : 0,
      recruiter: isSet(object.recruiter) ? Number(object.recruiter) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: ClanInvitations_Invitation): unknown {
    const obj: any = {};
    message.clanId !== undefined && (obj.clanId = Math.round(message.clanId));
    message.recruiter !== undefined && (obj.recruiter = Math.round(message.recruiter));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<ClanInvitations_Invitation>, I>>(base?: I): ClanInvitations_Invitation {
    return ClanInvitations_Invitation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClanInvitations_Invitation>, I>>(object: I): ClanInvitations_Invitation {
    const message = createBaseClanInvitations_Invitation();
    message.clanId = object.clanId ?? 0;
    message.recruiter = object.recruiter ?? 0;
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseAppRequest(): AppRequest {
  return {
    seq: 0,
    playerId: 0,
    playerToken: 0,
    entityId: 0,
    getInfo: undefined,
    getTime: undefined,
    getMap: undefined,
    getTeamInfo: undefined,
    getTeamChat: undefined,
    sendTeamMessage: undefined,
    getEntityInfo: undefined,
    setEntityValue: undefined,
    checkSubscription: undefined,
    setSubscription: undefined,
    getMapMarkers: undefined,
    promoteToLeader: undefined,
    getClanInfo: undefined,
    setClanMotd: undefined,
    getClanChat: undefined,
    sendClanMessage: undefined,
    getNexusAuth: undefined,
    cameraSubscribe: undefined,
    cameraUnsubscribe: undefined,
    cameraInput: undefined,
  };
}

export const AppRequest = {
  encode(message: AppRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seq !== 0) {
      writer.uint32(8).uint32(message.seq);
    }
    if (message.playerId !== 0) {
      writer.uint32(16).uint64(message.playerId);
    }
    if (message.playerToken !== 0) {
      writer.uint32(24).int32(message.playerToken);
    }
    if (message.entityId !== 0) {
      writer.uint32(32).uint32(message.entityId);
    }
    if (message.getInfo !== undefined) {
      AppEmpty.encode(message.getInfo, writer.uint32(66).fork()).ldelim();
    }
    if (message.getTime !== undefined) {
      AppEmpty.encode(message.getTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.getMap !== undefined) {
      AppEmpty.encode(message.getMap, writer.uint32(82).fork()).ldelim();
    }
    if (message.getTeamInfo !== undefined) {
      AppEmpty.encode(message.getTeamInfo, writer.uint32(90).fork()).ldelim();
    }
    if (message.getTeamChat !== undefined) {
      AppEmpty.encode(message.getTeamChat, writer.uint32(98).fork()).ldelim();
    }
    if (message.sendTeamMessage !== undefined) {
      AppSendMessage.encode(message.sendTeamMessage, writer.uint32(106).fork()).ldelim();
    }
    if (message.getEntityInfo !== undefined) {
      AppEmpty.encode(message.getEntityInfo, writer.uint32(114).fork()).ldelim();
    }
    if (message.setEntityValue !== undefined) {
      AppSetEntityValue.encode(message.setEntityValue, writer.uint32(122).fork()).ldelim();
    }
    if (message.checkSubscription !== undefined) {
      AppEmpty.encode(message.checkSubscription, writer.uint32(130).fork()).ldelim();
    }
    if (message.setSubscription !== undefined) {
      AppFlag.encode(message.setSubscription, writer.uint32(138).fork()).ldelim();
    }
    if (message.getMapMarkers !== undefined) {
      AppEmpty.encode(message.getMapMarkers, writer.uint32(146).fork()).ldelim();
    }
    if (message.promoteToLeader !== undefined) {
      AppPromoteToLeader.encode(message.promoteToLeader, writer.uint32(162).fork()).ldelim();
    }
    if (message.getClanInfo !== undefined) {
      AppEmpty.encode(message.getClanInfo, writer.uint32(170).fork()).ldelim();
    }
    if (message.setClanMotd !== undefined) {
      AppSendMessage.encode(message.setClanMotd, writer.uint32(178).fork()).ldelim();
    }
    if (message.getClanChat !== undefined) {
      AppEmpty.encode(message.getClanChat, writer.uint32(186).fork()).ldelim();
    }
    if (message.sendClanMessage !== undefined) {
      AppSendMessage.encode(message.sendClanMessage, writer.uint32(194).fork()).ldelim();
    }
    if (message.getNexusAuth !== undefined) {
      AppGetNexusAuth.encode(message.getNexusAuth, writer.uint32(202).fork()).ldelim();
    }
    if (message.cameraSubscribe !== undefined) {
      AppCameraSubscribe.encode(message.cameraSubscribe, writer.uint32(242).fork()).ldelim();
    }
    if (message.cameraUnsubscribe !== undefined) {
      AppEmpty.encode(message.cameraUnsubscribe, writer.uint32(250).fork()).ldelim();
    }
    if (message.cameraInput !== undefined) {
      AppCameraInput.encode(message.cameraInput, writer.uint32(258).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.seq = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.playerId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.playerToken = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.entityId = reader.uint32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.getInfo = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.getTime = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.getMap = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.getTeamInfo = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.getTeamChat = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.sendTeamMessage = AppSendMessage.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.getEntityInfo = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.setEntityValue = AppSetEntityValue.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.checkSubscription = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.setSubscription = AppFlag.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.getMapMarkers = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.promoteToLeader = AppPromoteToLeader.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.getClanInfo = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.setClanMotd = AppSendMessage.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.getClanChat = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.sendClanMessage = AppSendMessage.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.getNexusAuth = AppGetNexusAuth.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.cameraSubscribe = AppCameraSubscribe.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.cameraUnsubscribe = AppEmpty.decode(reader, reader.uint32());
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.cameraInput = AppCameraInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppRequest {
    return {
      seq: isSet(object.seq) ? Number(object.seq) : 0,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      playerToken: isSet(object.playerToken) ? Number(object.playerToken) : 0,
      entityId: isSet(object.entityId) ? Number(object.entityId) : 0,
      getInfo: isSet(object.getInfo) ? AppEmpty.fromJSON(object.getInfo) : undefined,
      getTime: isSet(object.getTime) ? AppEmpty.fromJSON(object.getTime) : undefined,
      getMap: isSet(object.getMap) ? AppEmpty.fromJSON(object.getMap) : undefined,
      getTeamInfo: isSet(object.getTeamInfo) ? AppEmpty.fromJSON(object.getTeamInfo) : undefined,
      getTeamChat: isSet(object.getTeamChat) ? AppEmpty.fromJSON(object.getTeamChat) : undefined,
      sendTeamMessage: isSet(object.sendTeamMessage) ? AppSendMessage.fromJSON(object.sendTeamMessage) : undefined,
      getEntityInfo: isSet(object.getEntityInfo) ? AppEmpty.fromJSON(object.getEntityInfo) : undefined,
      setEntityValue: isSet(object.setEntityValue) ? AppSetEntityValue.fromJSON(object.setEntityValue) : undefined,
      checkSubscription: isSet(object.checkSubscription) ? AppEmpty.fromJSON(object.checkSubscription) : undefined,
      setSubscription: isSet(object.setSubscription) ? AppFlag.fromJSON(object.setSubscription) : undefined,
      getMapMarkers: isSet(object.getMapMarkers) ? AppEmpty.fromJSON(object.getMapMarkers) : undefined,
      promoteToLeader: isSet(object.promoteToLeader) ? AppPromoteToLeader.fromJSON(object.promoteToLeader) : undefined,
      getClanInfo: isSet(object.getClanInfo) ? AppEmpty.fromJSON(object.getClanInfo) : undefined,
      setClanMotd: isSet(object.setClanMotd) ? AppSendMessage.fromJSON(object.setClanMotd) : undefined,
      getClanChat: isSet(object.getClanChat) ? AppEmpty.fromJSON(object.getClanChat) : undefined,
      sendClanMessage: isSet(object.sendClanMessage) ? AppSendMessage.fromJSON(object.sendClanMessage) : undefined,
      getNexusAuth: isSet(object.getNexusAuth) ? AppGetNexusAuth.fromJSON(object.getNexusAuth) : undefined,
      cameraSubscribe: isSet(object.cameraSubscribe) ? AppCameraSubscribe.fromJSON(object.cameraSubscribe) : undefined,
      cameraUnsubscribe: isSet(object.cameraUnsubscribe) ? AppEmpty.fromJSON(object.cameraUnsubscribe) : undefined,
      cameraInput: isSet(object.cameraInput) ? AppCameraInput.fromJSON(object.cameraInput) : undefined,
    };
  },

  toJSON(message: AppRequest): unknown {
    const obj: any = {};
    message.seq !== undefined && (obj.seq = Math.round(message.seq));
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.playerToken !== undefined && (obj.playerToken = Math.round(message.playerToken));
    message.entityId !== undefined && (obj.entityId = Math.round(message.entityId));
    message.getInfo !== undefined && (obj.getInfo = message.getInfo ? AppEmpty.toJSON(message.getInfo) : undefined);
    message.getTime !== undefined && (obj.getTime = message.getTime ? AppEmpty.toJSON(message.getTime) : undefined);
    message.getMap !== undefined && (obj.getMap = message.getMap ? AppEmpty.toJSON(message.getMap) : undefined);
    message.getTeamInfo !== undefined &&
      (obj.getTeamInfo = message.getTeamInfo ? AppEmpty.toJSON(message.getTeamInfo) : undefined);
    message.getTeamChat !== undefined &&
      (obj.getTeamChat = message.getTeamChat ? AppEmpty.toJSON(message.getTeamChat) : undefined);
    message.sendTeamMessage !== undefined &&
      (obj.sendTeamMessage = message.sendTeamMessage ? AppSendMessage.toJSON(message.sendTeamMessage) : undefined);
    message.getEntityInfo !== undefined &&
      (obj.getEntityInfo = message.getEntityInfo ? AppEmpty.toJSON(message.getEntityInfo) : undefined);
    message.setEntityValue !== undefined &&
      (obj.setEntityValue = message.setEntityValue ? AppSetEntityValue.toJSON(message.setEntityValue) : undefined);
    message.checkSubscription !== undefined &&
      (obj.checkSubscription = message.checkSubscription ? AppEmpty.toJSON(message.checkSubscription) : undefined);
    message.setSubscription !== undefined &&
      (obj.setSubscription = message.setSubscription ? AppFlag.toJSON(message.setSubscription) : undefined);
    message.getMapMarkers !== undefined &&
      (obj.getMapMarkers = message.getMapMarkers ? AppEmpty.toJSON(message.getMapMarkers) : undefined);
    message.promoteToLeader !== undefined &&
      (obj.promoteToLeader = message.promoteToLeader ? AppPromoteToLeader.toJSON(message.promoteToLeader) : undefined);
    message.getClanInfo !== undefined &&
      (obj.getClanInfo = message.getClanInfo ? AppEmpty.toJSON(message.getClanInfo) : undefined);
    message.setClanMotd !== undefined &&
      (obj.setClanMotd = message.setClanMotd ? AppSendMessage.toJSON(message.setClanMotd) : undefined);
    message.getClanChat !== undefined &&
      (obj.getClanChat = message.getClanChat ? AppEmpty.toJSON(message.getClanChat) : undefined);
    message.sendClanMessage !== undefined &&
      (obj.sendClanMessage = message.sendClanMessage ? AppSendMessage.toJSON(message.sendClanMessage) : undefined);
    message.getNexusAuth !== undefined &&
      (obj.getNexusAuth = message.getNexusAuth ? AppGetNexusAuth.toJSON(message.getNexusAuth) : undefined);
    message.cameraSubscribe !== undefined &&
      (obj.cameraSubscribe = message.cameraSubscribe ? AppCameraSubscribe.toJSON(message.cameraSubscribe) : undefined);
    message.cameraUnsubscribe !== undefined &&
      (obj.cameraUnsubscribe = message.cameraUnsubscribe ? AppEmpty.toJSON(message.cameraUnsubscribe) : undefined);
    message.cameraInput !== undefined &&
      (obj.cameraInput = message.cameraInput ? AppCameraInput.toJSON(message.cameraInput) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppRequest>, I>>(base?: I): AppRequest {
    return AppRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppRequest>, I>>(object: I): AppRequest {
    const message = createBaseAppRequest();
    message.seq = object.seq ?? 0;
    message.playerId = object.playerId ?? 0;
    message.playerToken = object.playerToken ?? 0;
    message.entityId = object.entityId ?? 0;
    message.getInfo = (object.getInfo !== undefined && object.getInfo !== null)
      ? AppEmpty.fromPartial(object.getInfo)
      : undefined;
    message.getTime = (object.getTime !== undefined && object.getTime !== null)
      ? AppEmpty.fromPartial(object.getTime)
      : undefined;
    message.getMap = (object.getMap !== undefined && object.getMap !== null)
      ? AppEmpty.fromPartial(object.getMap)
      : undefined;
    message.getTeamInfo = (object.getTeamInfo !== undefined && object.getTeamInfo !== null)
      ? AppEmpty.fromPartial(object.getTeamInfo)
      : undefined;
    message.getTeamChat = (object.getTeamChat !== undefined && object.getTeamChat !== null)
      ? AppEmpty.fromPartial(object.getTeamChat)
      : undefined;
    message.sendTeamMessage = (object.sendTeamMessage !== undefined && object.sendTeamMessage !== null)
      ? AppSendMessage.fromPartial(object.sendTeamMessage)
      : undefined;
    message.getEntityInfo = (object.getEntityInfo !== undefined && object.getEntityInfo !== null)
      ? AppEmpty.fromPartial(object.getEntityInfo)
      : undefined;
    message.setEntityValue = (object.setEntityValue !== undefined && object.setEntityValue !== null)
      ? AppSetEntityValue.fromPartial(object.setEntityValue)
      : undefined;
    message.checkSubscription = (object.checkSubscription !== undefined && object.checkSubscription !== null)
      ? AppEmpty.fromPartial(object.checkSubscription)
      : undefined;
    message.setSubscription = (object.setSubscription !== undefined && object.setSubscription !== null)
      ? AppFlag.fromPartial(object.setSubscription)
      : undefined;
    message.getMapMarkers = (object.getMapMarkers !== undefined && object.getMapMarkers !== null)
      ? AppEmpty.fromPartial(object.getMapMarkers)
      : undefined;
    message.promoteToLeader = (object.promoteToLeader !== undefined && object.promoteToLeader !== null)
      ? AppPromoteToLeader.fromPartial(object.promoteToLeader)
      : undefined;
    message.getClanInfo = (object.getClanInfo !== undefined && object.getClanInfo !== null)
      ? AppEmpty.fromPartial(object.getClanInfo)
      : undefined;
    message.setClanMotd = (object.setClanMotd !== undefined && object.setClanMotd !== null)
      ? AppSendMessage.fromPartial(object.setClanMotd)
      : undefined;
    message.getClanChat = (object.getClanChat !== undefined && object.getClanChat !== null)
      ? AppEmpty.fromPartial(object.getClanChat)
      : undefined;
    message.sendClanMessage = (object.sendClanMessage !== undefined && object.sendClanMessage !== null)
      ? AppSendMessage.fromPartial(object.sendClanMessage)
      : undefined;
    message.getNexusAuth = (object.getNexusAuth !== undefined && object.getNexusAuth !== null)
      ? AppGetNexusAuth.fromPartial(object.getNexusAuth)
      : undefined;
    message.cameraSubscribe = (object.cameraSubscribe !== undefined && object.cameraSubscribe !== null)
      ? AppCameraSubscribe.fromPartial(object.cameraSubscribe)
      : undefined;
    message.cameraUnsubscribe = (object.cameraUnsubscribe !== undefined && object.cameraUnsubscribe !== null)
      ? AppEmpty.fromPartial(object.cameraUnsubscribe)
      : undefined;
    message.cameraInput = (object.cameraInput !== undefined && object.cameraInput !== null)
      ? AppCameraInput.fromPartial(object.cameraInput)
      : undefined;
    return message;
  },
};

function createBaseAppMessage(): AppMessage {
  return { response: undefined, broadcast: undefined };
}

export const AppMessage = {
  encode(message: AppMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      AppResponse.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.broadcast !== undefined) {
      AppBroadcast.encode(message.broadcast, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = AppResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.broadcast = AppBroadcast.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppMessage {
    return {
      response: isSet(object.response) ? AppResponse.fromJSON(object.response) : undefined,
      broadcast: isSet(object.broadcast) ? AppBroadcast.fromJSON(object.broadcast) : undefined,
    };
  },

  toJSON(message: AppMessage): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = message.response ? AppResponse.toJSON(message.response) : undefined);
    message.broadcast !== undefined &&
      (obj.broadcast = message.broadcast ? AppBroadcast.toJSON(message.broadcast) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppMessage>, I>>(base?: I): AppMessage {
    return AppMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppMessage>, I>>(object: I): AppMessage {
    const message = createBaseAppMessage();
    message.response = (object.response !== undefined && object.response !== null)
      ? AppResponse.fromPartial(object.response)
      : undefined;
    message.broadcast = (object.broadcast !== undefined && object.broadcast !== null)
      ? AppBroadcast.fromPartial(object.broadcast)
      : undefined;
    return message;
  },
};

function createBaseAppResponse(): AppResponse {
  return {
    seq: 0,
    success: undefined,
    error: undefined,
    info: undefined,
    time: undefined,
    map: undefined,
    teamInfo: undefined,
    teamChat: undefined,
    entityInfo: undefined,
    flag: undefined,
    mapMarkers: undefined,
    clanInfo: undefined,
    clanChat: undefined,
    nexusAuth: undefined,
    cameraSubscribeInfo: undefined,
  };
}

export const AppResponse = {
  encode(message: AppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seq !== 0) {
      writer.uint32(8).uint32(message.seq);
    }
    if (message.success !== undefined) {
      AppSuccess.encode(message.success, writer.uint32(34).fork()).ldelim();
    }
    if (message.error !== undefined) {
      AppError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    if (message.info !== undefined) {
      AppInfo.encode(message.info, writer.uint32(50).fork()).ldelim();
    }
    if (message.time !== undefined) {
      AppTime.encode(message.time, writer.uint32(58).fork()).ldelim();
    }
    if (message.map !== undefined) {
      AppMap.encode(message.map, writer.uint32(66).fork()).ldelim();
    }
    if (message.teamInfo !== undefined) {
      AppTeamInfo.encode(message.teamInfo, writer.uint32(74).fork()).ldelim();
    }
    if (message.teamChat !== undefined) {
      AppTeamChat.encode(message.teamChat, writer.uint32(82).fork()).ldelim();
    }
    if (message.entityInfo !== undefined) {
      AppEntityInfo.encode(message.entityInfo, writer.uint32(90).fork()).ldelim();
    }
    if (message.flag !== undefined) {
      AppFlag.encode(message.flag, writer.uint32(98).fork()).ldelim();
    }
    if (message.mapMarkers !== undefined) {
      AppMapMarkers.encode(message.mapMarkers, writer.uint32(106).fork()).ldelim();
    }
    if (message.clanInfo !== undefined) {
      AppClanInfo.encode(message.clanInfo, writer.uint32(122).fork()).ldelim();
    }
    if (message.clanChat !== undefined) {
      AppClanChat.encode(message.clanChat, writer.uint32(130).fork()).ldelim();
    }
    if (message.nexusAuth !== undefined) {
      AppNexusAuth.encode(message.nexusAuth, writer.uint32(138).fork()).ldelim();
    }
    if (message.cameraSubscribeInfo !== undefined) {
      AppCameraInfo.encode(message.cameraSubscribeInfo, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.seq = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.success = AppSuccess.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.error = AppError.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.info = AppInfo.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.time = AppTime.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.map = AppMap.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.teamInfo = AppTeamInfo.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.teamChat = AppTeamChat.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.entityInfo = AppEntityInfo.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.flag = AppFlag.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.mapMarkers = AppMapMarkers.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.clanInfo = AppClanInfo.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.clanChat = AppClanChat.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.nexusAuth = AppNexusAuth.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.cameraSubscribeInfo = AppCameraInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppResponse {
    return {
      seq: isSet(object.seq) ? Number(object.seq) : 0,
      success: isSet(object.success) ? AppSuccess.fromJSON(object.success) : undefined,
      error: isSet(object.error) ? AppError.fromJSON(object.error) : undefined,
      info: isSet(object.info) ? AppInfo.fromJSON(object.info) : undefined,
      time: isSet(object.time) ? AppTime.fromJSON(object.time) : undefined,
      map: isSet(object.map) ? AppMap.fromJSON(object.map) : undefined,
      teamInfo: isSet(object.teamInfo) ? AppTeamInfo.fromJSON(object.teamInfo) : undefined,
      teamChat: isSet(object.teamChat) ? AppTeamChat.fromJSON(object.teamChat) : undefined,
      entityInfo: isSet(object.entityInfo) ? AppEntityInfo.fromJSON(object.entityInfo) : undefined,
      flag: isSet(object.flag) ? AppFlag.fromJSON(object.flag) : undefined,
      mapMarkers: isSet(object.mapMarkers) ? AppMapMarkers.fromJSON(object.mapMarkers) : undefined,
      clanInfo: isSet(object.clanInfo) ? AppClanInfo.fromJSON(object.clanInfo) : undefined,
      clanChat: isSet(object.clanChat) ? AppClanChat.fromJSON(object.clanChat) : undefined,
      nexusAuth: isSet(object.nexusAuth) ? AppNexusAuth.fromJSON(object.nexusAuth) : undefined,
      cameraSubscribeInfo: isSet(object.cameraSubscribeInfo)
        ? AppCameraInfo.fromJSON(object.cameraSubscribeInfo)
        : undefined,
    };
  },

  toJSON(message: AppResponse): unknown {
    const obj: any = {};
    message.seq !== undefined && (obj.seq = Math.round(message.seq));
    message.success !== undefined && (obj.success = message.success ? AppSuccess.toJSON(message.success) : undefined);
    message.error !== undefined && (obj.error = message.error ? AppError.toJSON(message.error) : undefined);
    message.info !== undefined && (obj.info = message.info ? AppInfo.toJSON(message.info) : undefined);
    message.time !== undefined && (obj.time = message.time ? AppTime.toJSON(message.time) : undefined);
    message.map !== undefined && (obj.map = message.map ? AppMap.toJSON(message.map) : undefined);
    message.teamInfo !== undefined &&
      (obj.teamInfo = message.teamInfo ? AppTeamInfo.toJSON(message.teamInfo) : undefined);
    message.teamChat !== undefined &&
      (obj.teamChat = message.teamChat ? AppTeamChat.toJSON(message.teamChat) : undefined);
    message.entityInfo !== undefined &&
      (obj.entityInfo = message.entityInfo ? AppEntityInfo.toJSON(message.entityInfo) : undefined);
    message.flag !== undefined && (obj.flag = message.flag ? AppFlag.toJSON(message.flag) : undefined);
    message.mapMarkers !== undefined &&
      (obj.mapMarkers = message.mapMarkers ? AppMapMarkers.toJSON(message.mapMarkers) : undefined);
    message.clanInfo !== undefined &&
      (obj.clanInfo = message.clanInfo ? AppClanInfo.toJSON(message.clanInfo) : undefined);
    message.clanChat !== undefined &&
      (obj.clanChat = message.clanChat ? AppClanChat.toJSON(message.clanChat) : undefined);
    message.nexusAuth !== undefined &&
      (obj.nexusAuth = message.nexusAuth ? AppNexusAuth.toJSON(message.nexusAuth) : undefined);
    message.cameraSubscribeInfo !== undefined && (obj.cameraSubscribeInfo = message.cameraSubscribeInfo
      ? AppCameraInfo.toJSON(message.cameraSubscribeInfo)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppResponse>, I>>(base?: I): AppResponse {
    return AppResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppResponse>, I>>(object: I): AppResponse {
    const message = createBaseAppResponse();
    message.seq = object.seq ?? 0;
    message.success = (object.success !== undefined && object.success !== null)
      ? AppSuccess.fromPartial(object.success)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? AppError.fromPartial(object.error)
      : undefined;
    message.info = (object.info !== undefined && object.info !== null) ? AppInfo.fromPartial(object.info) : undefined;
    message.time = (object.time !== undefined && object.time !== null) ? AppTime.fromPartial(object.time) : undefined;
    message.map = (object.map !== undefined && object.map !== null) ? AppMap.fromPartial(object.map) : undefined;
    message.teamInfo = (object.teamInfo !== undefined && object.teamInfo !== null)
      ? AppTeamInfo.fromPartial(object.teamInfo)
      : undefined;
    message.teamChat = (object.teamChat !== undefined && object.teamChat !== null)
      ? AppTeamChat.fromPartial(object.teamChat)
      : undefined;
    message.entityInfo = (object.entityInfo !== undefined && object.entityInfo !== null)
      ? AppEntityInfo.fromPartial(object.entityInfo)
      : undefined;
    message.flag = (object.flag !== undefined && object.flag !== null) ? AppFlag.fromPartial(object.flag) : undefined;
    message.mapMarkers = (object.mapMarkers !== undefined && object.mapMarkers !== null)
      ? AppMapMarkers.fromPartial(object.mapMarkers)
      : undefined;
    message.clanInfo = (object.clanInfo !== undefined && object.clanInfo !== null)
      ? AppClanInfo.fromPartial(object.clanInfo)
      : undefined;
    message.clanChat = (object.clanChat !== undefined && object.clanChat !== null)
      ? AppClanChat.fromPartial(object.clanChat)
      : undefined;
    message.nexusAuth = (object.nexusAuth !== undefined && object.nexusAuth !== null)
      ? AppNexusAuth.fromPartial(object.nexusAuth)
      : undefined;
    message.cameraSubscribeInfo = (object.cameraSubscribeInfo !== undefined && object.cameraSubscribeInfo !== null)
      ? AppCameraInfo.fromPartial(object.cameraSubscribeInfo)
      : undefined;
    return message;
  },
};

function createBaseAppBroadcast(): AppBroadcast {
  return {
    teamChanged: undefined,
    teamMessage: undefined,
    entityChanged: undefined,
    clanChanged: undefined,
    clanMessage: undefined,
    cameraRays: undefined,
  };
}

export const AppBroadcast = {
  encode(message: AppBroadcast, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamChanged !== undefined) {
      AppTeamChanged.encode(message.teamChanged, writer.uint32(34).fork()).ldelim();
    }
    if (message.teamMessage !== undefined) {
      AppNewTeamMessage.encode(message.teamMessage, writer.uint32(42).fork()).ldelim();
    }
    if (message.entityChanged !== undefined) {
      AppEntityChanged.encode(message.entityChanged, writer.uint32(50).fork()).ldelim();
    }
    if (message.clanChanged !== undefined) {
      AppClanChanged.encode(message.clanChanged, writer.uint32(58).fork()).ldelim();
    }
    if (message.clanMessage !== undefined) {
      AppNewClanMessage.encode(message.clanMessage, writer.uint32(66).fork()).ldelim();
    }
    if (message.cameraRays !== undefined) {
      AppCameraRays.encode(message.cameraRays, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppBroadcast {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppBroadcast();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.teamChanged = AppTeamChanged.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.teamMessage = AppNewTeamMessage.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.entityChanged = AppEntityChanged.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.clanChanged = AppClanChanged.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.clanMessage = AppNewClanMessage.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.cameraRays = AppCameraRays.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppBroadcast {
    return {
      teamChanged: isSet(object.teamChanged) ? AppTeamChanged.fromJSON(object.teamChanged) : undefined,
      teamMessage: isSet(object.teamMessage) ? AppNewTeamMessage.fromJSON(object.teamMessage) : undefined,
      entityChanged: isSet(object.entityChanged) ? AppEntityChanged.fromJSON(object.entityChanged) : undefined,
      clanChanged: isSet(object.clanChanged) ? AppClanChanged.fromJSON(object.clanChanged) : undefined,
      clanMessage: isSet(object.clanMessage) ? AppNewClanMessage.fromJSON(object.clanMessage) : undefined,
      cameraRays: isSet(object.cameraRays) ? AppCameraRays.fromJSON(object.cameraRays) : undefined,
    };
  },

  toJSON(message: AppBroadcast): unknown {
    const obj: any = {};
    message.teamChanged !== undefined &&
      (obj.teamChanged = message.teamChanged ? AppTeamChanged.toJSON(message.teamChanged) : undefined);
    message.teamMessage !== undefined &&
      (obj.teamMessage = message.teamMessage ? AppNewTeamMessage.toJSON(message.teamMessage) : undefined);
    message.entityChanged !== undefined &&
      (obj.entityChanged = message.entityChanged ? AppEntityChanged.toJSON(message.entityChanged) : undefined);
    message.clanChanged !== undefined &&
      (obj.clanChanged = message.clanChanged ? AppClanChanged.toJSON(message.clanChanged) : undefined);
    message.clanMessage !== undefined &&
      (obj.clanMessage = message.clanMessage ? AppNewClanMessage.toJSON(message.clanMessage) : undefined);
    message.cameraRays !== undefined &&
      (obj.cameraRays = message.cameraRays ? AppCameraRays.toJSON(message.cameraRays) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppBroadcast>, I>>(base?: I): AppBroadcast {
    return AppBroadcast.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppBroadcast>, I>>(object: I): AppBroadcast {
    const message = createBaseAppBroadcast();
    message.teamChanged = (object.teamChanged !== undefined && object.teamChanged !== null)
      ? AppTeamChanged.fromPartial(object.teamChanged)
      : undefined;
    message.teamMessage = (object.teamMessage !== undefined && object.teamMessage !== null)
      ? AppNewTeamMessage.fromPartial(object.teamMessage)
      : undefined;
    message.entityChanged = (object.entityChanged !== undefined && object.entityChanged !== null)
      ? AppEntityChanged.fromPartial(object.entityChanged)
      : undefined;
    message.clanChanged = (object.clanChanged !== undefined && object.clanChanged !== null)
      ? AppClanChanged.fromPartial(object.clanChanged)
      : undefined;
    message.clanMessage = (object.clanMessage !== undefined && object.clanMessage !== null)
      ? AppNewClanMessage.fromPartial(object.clanMessage)
      : undefined;
    message.cameraRays = (object.cameraRays !== undefined && object.cameraRays !== null)
      ? AppCameraRays.fromPartial(object.cameraRays)
      : undefined;
    return message;
  },
};

function createBaseAppEmpty(): AppEmpty {
  return {};
}

export const AppEmpty = {
  encode(_: AppEmpty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppEmpty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AppEmpty {
    return {};
  },

  toJSON(_: AppEmpty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AppEmpty>, I>>(base?: I): AppEmpty {
    return AppEmpty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppEmpty>, I>>(_: I): AppEmpty {
    const message = createBaseAppEmpty();
    return message;
  },
};

function createBaseAppSendMessage(): AppSendMessage {
  return { message: "" };
}

export const AppSendMessage = {
  encode(message: AppSendMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppSendMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppSendMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppSendMessage {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: AppSendMessage): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppSendMessage>, I>>(base?: I): AppSendMessage {
    return AppSendMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppSendMessage>, I>>(object: I): AppSendMessage {
    const message = createBaseAppSendMessage();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseAppSetEntityValue(): AppSetEntityValue {
  return { value: false };
}

export const AppSetEntityValue = {
  encode(message: AppSetEntityValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppSetEntityValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppSetEntityValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppSetEntityValue {
    return { value: isSet(object.value) ? Boolean(object.value) : false };
  },

  toJSON(message: AppSetEntityValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppSetEntityValue>, I>>(base?: I): AppSetEntityValue {
    return AppSetEntityValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppSetEntityValue>, I>>(object: I): AppSetEntityValue {
    const message = createBaseAppSetEntityValue();
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseAppPromoteToLeader(): AppPromoteToLeader {
  return { steamId: 0 };
}

export const AppPromoteToLeader = {
  encode(message: AppPromoteToLeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(8).uint64(message.steamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppPromoteToLeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppPromoteToLeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.steamId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppPromoteToLeader {
    return { steamId: isSet(object.steamId) ? Number(object.steamId) : 0 };
  },

  toJSON(message: AppPromoteToLeader): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    return obj;
  },

  create<I extends Exact<DeepPartial<AppPromoteToLeader>, I>>(base?: I): AppPromoteToLeader {
    return AppPromoteToLeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppPromoteToLeader>, I>>(object: I): AppPromoteToLeader {
    const message = createBaseAppPromoteToLeader();
    message.steamId = object.steamId ?? 0;
    return message;
  },
};

function createBaseAppGetNexusAuth(): AppGetNexusAuth {
  return { appKey: "" };
}

export const AppGetNexusAuth = {
  encode(message: AppGetNexusAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appKey !== "") {
      writer.uint32(10).string(message.appKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppGetNexusAuth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppGetNexusAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppGetNexusAuth {
    return { appKey: isSet(object.appKey) ? String(object.appKey) : "" };
  },

  toJSON(message: AppGetNexusAuth): unknown {
    const obj: any = {};
    message.appKey !== undefined && (obj.appKey = message.appKey);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppGetNexusAuth>, I>>(base?: I): AppGetNexusAuth {
    return AppGetNexusAuth.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppGetNexusAuth>, I>>(object: I): AppGetNexusAuth {
    const message = createBaseAppGetNexusAuth();
    message.appKey = object.appKey ?? "";
    return message;
  },
};

function createBaseAppSuccess(): AppSuccess {
  return {};
}

export const AppSuccess = {
  encode(_: AppSuccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppSuccess {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AppSuccess {
    return {};
  },

  toJSON(_: AppSuccess): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AppSuccess>, I>>(base?: I): AppSuccess {
    return AppSuccess.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppSuccess>, I>>(_: I): AppSuccess {
    const message = createBaseAppSuccess();
    return message;
  },
};

function createBaseAppError(): AppError {
  return { error: "" };
}

export const AppError = {
  encode(message: AppError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppError {
    return { error: isSet(object.error) ? String(object.error) : "" };
  },

  toJSON(message: AppError): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppError>, I>>(base?: I): AppError {
    return AppError.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppError>, I>>(object: I): AppError {
    const message = createBaseAppError();
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseAppFlag(): AppFlag {
  return { value: false };
}

export const AppFlag = {
  encode(message: AppFlag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppFlag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppFlag {
    return { value: isSet(object.value) ? Boolean(object.value) : false };
  },

  toJSON(message: AppFlag): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppFlag>, I>>(base?: I): AppFlag {
    return AppFlag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppFlag>, I>>(object: I): AppFlag {
    const message = createBaseAppFlag();
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseAppInfo(): AppInfo {
  return {
    name: "",
    headerImage: "",
    url: "",
    map: "",
    mapSize: 0,
    wipeTime: 0,
    players: 0,
    maxPlayers: 0,
    queuedPlayers: 0,
    seed: 0,
    salt: 0,
    logoImage: "",
    nexus: "",
    nexusId: 0,
    nexusZone: "",
  };
}

export const AppInfo = {
  encode(message: AppInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.headerImage !== "") {
      writer.uint32(18).string(message.headerImage);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.map !== "") {
      writer.uint32(34).string(message.map);
    }
    if (message.mapSize !== 0) {
      writer.uint32(40).uint32(message.mapSize);
    }
    if (message.wipeTime !== 0) {
      writer.uint32(48).uint32(message.wipeTime);
    }
    if (message.players !== 0) {
      writer.uint32(56).uint32(message.players);
    }
    if (message.maxPlayers !== 0) {
      writer.uint32(64).uint32(message.maxPlayers);
    }
    if (message.queuedPlayers !== 0) {
      writer.uint32(72).uint32(message.queuedPlayers);
    }
    if (message.seed !== 0) {
      writer.uint32(80).uint32(message.seed);
    }
    if (message.salt !== 0) {
      writer.uint32(88).uint32(message.salt);
    }
    if (message.logoImage !== "") {
      writer.uint32(98).string(message.logoImage);
    }
    if (message.nexus !== "") {
      writer.uint32(106).string(message.nexus);
    }
    if (message.nexusId !== 0) {
      writer.uint32(112).int32(message.nexusId);
    }
    if (message.nexusZone !== "") {
      writer.uint32(122).string(message.nexusZone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.headerImage = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.url = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.map = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.mapSize = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.wipeTime = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.players = reader.uint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.maxPlayers = reader.uint32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.queuedPlayers = reader.uint32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.seed = reader.uint32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.salt = reader.uint32();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.logoImage = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.nexus = reader.string();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.nexusId = reader.int32();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.nexusZone = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      headerImage: isSet(object.headerImage) ? String(object.headerImage) : "",
      url: isSet(object.url) ? String(object.url) : "",
      map: isSet(object.map) ? String(object.map) : "",
      mapSize: isSet(object.mapSize) ? Number(object.mapSize) : 0,
      wipeTime: isSet(object.wipeTime) ? Number(object.wipeTime) : 0,
      players: isSet(object.players) ? Number(object.players) : 0,
      maxPlayers: isSet(object.maxPlayers) ? Number(object.maxPlayers) : 0,
      queuedPlayers: isSet(object.queuedPlayers) ? Number(object.queuedPlayers) : 0,
      seed: isSet(object.seed) ? Number(object.seed) : 0,
      salt: isSet(object.salt) ? Number(object.salt) : 0,
      logoImage: isSet(object.logoImage) ? String(object.logoImage) : "",
      nexus: isSet(object.nexus) ? String(object.nexus) : "",
      nexusId: isSet(object.nexusId) ? Number(object.nexusId) : 0,
      nexusZone: isSet(object.nexusZone) ? String(object.nexusZone) : "",
    };
  },

  toJSON(message: AppInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.headerImage !== undefined && (obj.headerImage = message.headerImage);
    message.url !== undefined && (obj.url = message.url);
    message.map !== undefined && (obj.map = message.map);
    message.mapSize !== undefined && (obj.mapSize = Math.round(message.mapSize));
    message.wipeTime !== undefined && (obj.wipeTime = Math.round(message.wipeTime));
    message.players !== undefined && (obj.players = Math.round(message.players));
    message.maxPlayers !== undefined && (obj.maxPlayers = Math.round(message.maxPlayers));
    message.queuedPlayers !== undefined && (obj.queuedPlayers = Math.round(message.queuedPlayers));
    message.seed !== undefined && (obj.seed = Math.round(message.seed));
    message.salt !== undefined && (obj.salt = Math.round(message.salt));
    message.logoImage !== undefined && (obj.logoImage = message.logoImage);
    message.nexus !== undefined && (obj.nexus = message.nexus);
    message.nexusId !== undefined && (obj.nexusId = Math.round(message.nexusId));
    message.nexusZone !== undefined && (obj.nexusZone = message.nexusZone);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppInfo>, I>>(base?: I): AppInfo {
    return AppInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppInfo>, I>>(object: I): AppInfo {
    const message = createBaseAppInfo();
    message.name = object.name ?? "";
    message.headerImage = object.headerImage ?? "";
    message.url = object.url ?? "";
    message.map = object.map ?? "";
    message.mapSize = object.mapSize ?? 0;
    message.wipeTime = object.wipeTime ?? 0;
    message.players = object.players ?? 0;
    message.maxPlayers = object.maxPlayers ?? 0;
    message.queuedPlayers = object.queuedPlayers ?? 0;
    message.seed = object.seed ?? 0;
    message.salt = object.salt ?? 0;
    message.logoImage = object.logoImage ?? "";
    message.nexus = object.nexus ?? "";
    message.nexusId = object.nexusId ?? 0;
    message.nexusZone = object.nexusZone ?? "";
    return message;
  },
};

function createBaseAppTime(): AppTime {
  return { dayLengthMinutes: 0, timeScale: 0, sunrise: 0, sunset: 0, time: 0 };
}

export const AppTime = {
  encode(message: AppTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dayLengthMinutes !== 0) {
      writer.uint32(13).float(message.dayLengthMinutes);
    }
    if (message.timeScale !== 0) {
      writer.uint32(21).float(message.timeScale);
    }
    if (message.sunrise !== 0) {
      writer.uint32(29).float(message.sunrise);
    }
    if (message.sunset !== 0) {
      writer.uint32(37).float(message.sunset);
    }
    if (message.time !== 0) {
      writer.uint32(45).float(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppTime {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.dayLengthMinutes = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.timeScale = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.sunrise = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.sunset = reader.float();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.time = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppTime {
    return {
      dayLengthMinutes: isSet(object.dayLengthMinutes) ? Number(object.dayLengthMinutes) : 0,
      timeScale: isSet(object.timeScale) ? Number(object.timeScale) : 0,
      sunrise: isSet(object.sunrise) ? Number(object.sunrise) : 0,
      sunset: isSet(object.sunset) ? Number(object.sunset) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
    };
  },

  toJSON(message: AppTime): unknown {
    const obj: any = {};
    message.dayLengthMinutes !== undefined && (obj.dayLengthMinutes = message.dayLengthMinutes);
    message.timeScale !== undefined && (obj.timeScale = message.timeScale);
    message.sunrise !== undefined && (obj.sunrise = message.sunrise);
    message.sunset !== undefined && (obj.sunset = message.sunset);
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppTime>, I>>(base?: I): AppTime {
    return AppTime.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppTime>, I>>(object: I): AppTime {
    const message = createBaseAppTime();
    message.dayLengthMinutes = object.dayLengthMinutes ?? 0;
    message.timeScale = object.timeScale ?? 0;
    message.sunrise = object.sunrise ?? 0;
    message.sunset = object.sunset ?? 0;
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseAppMap(): AppMap {
  return { width: 0, height: 0, jpgImage: new Uint8Array(), oceanMargin: 0, monuments: [], background: "" };
}

export const AppMap = {
  encode(message: AppMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    if (message.jpgImage.length !== 0) {
      writer.uint32(26).bytes(message.jpgImage);
    }
    if (message.oceanMargin !== 0) {
      writer.uint32(32).int32(message.oceanMargin);
    }
    for (const v of message.monuments) {
      AppMap_Monument.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.background !== "") {
      writer.uint32(50).string(message.background);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jpgImage = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.oceanMargin = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.monuments.push(AppMap_Monument.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.background = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppMap {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      jpgImage: isSet(object.jpgImage) ? bytesFromBase64(object.jpgImage) : new Uint8Array(),
      oceanMargin: isSet(object.oceanMargin) ? Number(object.oceanMargin) : 0,
      monuments: Array.isArray(object?.monuments) ? object.monuments.map((e: any) => AppMap_Monument.fromJSON(e)) : [],
      background: isSet(object.background) ? String(object.background) : "",
    };
  },

  toJSON(message: AppMap): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.jpgImage !== undefined &&
      (obj.jpgImage = base64FromBytes(message.jpgImage !== undefined ? message.jpgImage : new Uint8Array()));
    message.oceanMargin !== undefined && (obj.oceanMargin = Math.round(message.oceanMargin));
    if (message.monuments) {
      obj.monuments = message.monuments.map((e) => e ? AppMap_Monument.toJSON(e) : undefined);
    } else {
      obj.monuments = [];
    }
    message.background !== undefined && (obj.background = message.background);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppMap>, I>>(base?: I): AppMap {
    return AppMap.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppMap>, I>>(object: I): AppMap {
    const message = createBaseAppMap();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.jpgImage = object.jpgImage ?? new Uint8Array();
    message.oceanMargin = object.oceanMargin ?? 0;
    message.monuments = object.monuments?.map((e) => AppMap_Monument.fromPartial(e)) || [];
    message.background = object.background ?? "";
    return message;
  },
};

function createBaseAppMap_Monument(): AppMap_Monument {
  return { token: "", x: 0, y: 0 };
}

export const AppMap_Monument = {
  encode(message: AppMap_Monument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.x !== 0) {
      writer.uint32(21).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(29).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppMap_Monument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppMap_Monument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.x = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.y = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppMap_Monument {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: AppMap_Monument): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppMap_Monument>, I>>(base?: I): AppMap_Monument {
    return AppMap_Monument.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppMap_Monument>, I>>(object: I): AppMap_Monument {
    const message = createBaseAppMap_Monument();
    message.token = object.token ?? "";
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseAppEntityInfo(): AppEntityInfo {
  return { type: 1, payload: undefined };
}

export const AppEntityInfo = {
  encode(message: AppEntityInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 1) {
      writer.uint32(8).int32(message.type);
    }
    if (message.payload !== undefined) {
      AppEntityPayload.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppEntityInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = AppEntityPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppEntityInfo {
    return {
      type: isSet(object.type) ? appEntityTypeFromJSON(object.type) : 1,
      payload: isSet(object.payload) ? AppEntityPayload.fromJSON(object.payload) : undefined,
    };
  },

  toJSON(message: AppEntityInfo): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = appEntityTypeToJSON(message.type));
    message.payload !== undefined &&
      (obj.payload = message.payload ? AppEntityPayload.toJSON(message.payload) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppEntityInfo>, I>>(base?: I): AppEntityInfo {
    return AppEntityInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppEntityInfo>, I>>(object: I): AppEntityInfo {
    const message = createBaseAppEntityInfo();
    message.type = object.type ?? 1;
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? AppEntityPayload.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseAppEntityPayload(): AppEntityPayload {
  return { value: false, items: [], capacity: 0, hasProtection: false, protectionExpiry: 0 };
}

export const AppEntityPayload = {
  encode(message: AppEntityPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    for (const v of message.items) {
      AppEntityPayload_Item.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.capacity !== 0) {
      writer.uint32(24).int32(message.capacity);
    }
    if (message.hasProtection === true) {
      writer.uint32(32).bool(message.hasProtection);
    }
    if (message.protectionExpiry !== 0) {
      writer.uint32(40).uint32(message.protectionExpiry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppEntityPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.items.push(AppEntityPayload_Item.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.capacity = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hasProtection = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.protectionExpiry = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppEntityPayload {
    return {
      value: isSet(object.value) ? Boolean(object.value) : false,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => AppEntityPayload_Item.fromJSON(e)) : [],
      capacity: isSet(object.capacity) ? Number(object.capacity) : 0,
      hasProtection: isSet(object.hasProtection) ? Boolean(object.hasProtection) : false,
      protectionExpiry: isSet(object.protectionExpiry) ? Number(object.protectionExpiry) : 0,
    };
  },

  toJSON(message: AppEntityPayload): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    if (message.items) {
      obj.items = message.items.map((e) => e ? AppEntityPayload_Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.capacity !== undefined && (obj.capacity = Math.round(message.capacity));
    message.hasProtection !== undefined && (obj.hasProtection = message.hasProtection);
    message.protectionExpiry !== undefined && (obj.protectionExpiry = Math.round(message.protectionExpiry));
    return obj;
  },

  create<I extends Exact<DeepPartial<AppEntityPayload>, I>>(base?: I): AppEntityPayload {
    return AppEntityPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppEntityPayload>, I>>(object: I): AppEntityPayload {
    const message = createBaseAppEntityPayload();
    message.value = object.value ?? false;
    message.items = object.items?.map((e) => AppEntityPayload_Item.fromPartial(e)) || [];
    message.capacity = object.capacity ?? 0;
    message.hasProtection = object.hasProtection ?? false;
    message.protectionExpiry = object.protectionExpiry ?? 0;
    return message;
  },
};

function createBaseAppEntityPayload_Item(): AppEntityPayload_Item {
  return { itemId: 0, quantity: 0, itemIsBlueprint: false };
}

export const AppEntityPayload_Item = {
  encode(message: AppEntityPayload_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).int32(message.itemId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    if (message.itemIsBlueprint === true) {
      writer.uint32(24).bool(message.itemIsBlueprint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityPayload_Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppEntityPayload_Item();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.itemId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.itemIsBlueprint = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppEntityPayload_Item {
    return {
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      itemIsBlueprint: isSet(object.itemIsBlueprint) ? Boolean(object.itemIsBlueprint) : false,
    };
  },

  toJSON(message: AppEntityPayload_Item): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.itemIsBlueprint !== undefined && (obj.itemIsBlueprint = message.itemIsBlueprint);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppEntityPayload_Item>, I>>(base?: I): AppEntityPayload_Item {
    return AppEntityPayload_Item.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppEntityPayload_Item>, I>>(object: I): AppEntityPayload_Item {
    const message = createBaseAppEntityPayload_Item();
    message.itemId = object.itemId ?? 0;
    message.quantity = object.quantity ?? 0;
    message.itemIsBlueprint = object.itemIsBlueprint ?? false;
    return message;
  },
};

function createBaseAppTeamInfo(): AppTeamInfo {
  return { leaderSteamId: 0, members: [], mapNotes: [], leaderMapNotes: [] };
}

export const AppTeamInfo = {
  encode(message: AppTeamInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaderSteamId !== 0) {
      writer.uint32(8).uint64(message.leaderSteamId);
    }
    for (const v of message.members) {
      AppTeamInfo_Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.mapNotes) {
      AppTeamInfo_Note.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.leaderMapNotes) {
      AppTeamInfo_Note.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppTeamInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.leaderSteamId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.members.push(AppTeamInfo_Member.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mapNotes.push(AppTeamInfo_Note.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.leaderMapNotes.push(AppTeamInfo_Note.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppTeamInfo {
    return {
      leaderSteamId: isSet(object.leaderSteamId) ? Number(object.leaderSteamId) : 0,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => AppTeamInfo_Member.fromJSON(e)) : [],
      mapNotes: Array.isArray(object?.mapNotes) ? object.mapNotes.map((e: any) => AppTeamInfo_Note.fromJSON(e)) : [],
      leaderMapNotes: Array.isArray(object?.leaderMapNotes)
        ? object.leaderMapNotes.map((e: any) => AppTeamInfo_Note.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AppTeamInfo): unknown {
    const obj: any = {};
    message.leaderSteamId !== undefined && (obj.leaderSteamId = Math.round(message.leaderSteamId));
    if (message.members) {
      obj.members = message.members.map((e) => e ? AppTeamInfo_Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    if (message.mapNotes) {
      obj.mapNotes = message.mapNotes.map((e) => e ? AppTeamInfo_Note.toJSON(e) : undefined);
    } else {
      obj.mapNotes = [];
    }
    if (message.leaderMapNotes) {
      obj.leaderMapNotes = message.leaderMapNotes.map((e) => e ? AppTeamInfo_Note.toJSON(e) : undefined);
    } else {
      obj.leaderMapNotes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppTeamInfo>, I>>(base?: I): AppTeamInfo {
    return AppTeamInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppTeamInfo>, I>>(object: I): AppTeamInfo {
    const message = createBaseAppTeamInfo();
    message.leaderSteamId = object.leaderSteamId ?? 0;
    message.members = object.members?.map((e) => AppTeamInfo_Member.fromPartial(e)) || [];
    message.mapNotes = object.mapNotes?.map((e) => AppTeamInfo_Note.fromPartial(e)) || [];
    message.leaderMapNotes = object.leaderMapNotes?.map((e) => AppTeamInfo_Note.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAppTeamInfo_Member(): AppTeamInfo_Member {
  return { steamId: 0, name: "", x: 0, y: 0, isOnline: false, spawnTime: 0, isAlive: false, deathTime: 0 };
}

export const AppTeamInfo_Member = {
  encode(message: AppTeamInfo_Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(8).uint64(message.steamId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.x !== 0) {
      writer.uint32(29).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(37).float(message.y);
    }
    if (message.isOnline === true) {
      writer.uint32(40).bool(message.isOnline);
    }
    if (message.spawnTime !== 0) {
      writer.uint32(48).uint32(message.spawnTime);
    }
    if (message.isAlive === true) {
      writer.uint32(56).bool(message.isAlive);
    }
    if (message.deathTime !== 0) {
      writer.uint32(64).uint32(message.deathTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamInfo_Member {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppTeamInfo_Member();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.steamId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.x = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.y = reader.float();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isOnline = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.spawnTime = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isAlive = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.deathTime = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppTeamInfo_Member {
    return {
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      isOnline: isSet(object.isOnline) ? Boolean(object.isOnline) : false,
      spawnTime: isSet(object.spawnTime) ? Number(object.spawnTime) : 0,
      isAlive: isSet(object.isAlive) ? Boolean(object.isAlive) : false,
      deathTime: isSet(object.deathTime) ? Number(object.deathTime) : 0,
    };
  },

  toJSON(message: AppTeamInfo_Member): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.name !== undefined && (obj.name = message.name);
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.isOnline !== undefined && (obj.isOnline = message.isOnline);
    message.spawnTime !== undefined && (obj.spawnTime = Math.round(message.spawnTime));
    message.isAlive !== undefined && (obj.isAlive = message.isAlive);
    message.deathTime !== undefined && (obj.deathTime = Math.round(message.deathTime));
    return obj;
  },

  create<I extends Exact<DeepPartial<AppTeamInfo_Member>, I>>(base?: I): AppTeamInfo_Member {
    return AppTeamInfo_Member.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppTeamInfo_Member>, I>>(object: I): AppTeamInfo_Member {
    const message = createBaseAppTeamInfo_Member();
    message.steamId = object.steamId ?? 0;
    message.name = object.name ?? "";
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.isOnline = object.isOnline ?? false;
    message.spawnTime = object.spawnTime ?? 0;
    message.isAlive = object.isAlive ?? false;
    message.deathTime = object.deathTime ?? 0;
    return message;
  },
};

function createBaseAppTeamInfo_Note(): AppTeamInfo_Note {
  return { type: 0, x: 0, y: 0 };
}

export const AppTeamInfo_Note = {
  encode(message: AppTeamInfo_Note, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.x !== 0) {
      writer.uint32(29).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(37).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamInfo_Note {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppTeamInfo_Note();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.x = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.y = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppTeamInfo_Note {
    return {
      type: isSet(object.type) ? Number(object.type) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: AppTeamInfo_Note): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppTeamInfo_Note>, I>>(base?: I): AppTeamInfo_Note {
    return AppTeamInfo_Note.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppTeamInfo_Note>, I>>(object: I): AppTeamInfo_Note {
    const message = createBaseAppTeamInfo_Note();
    message.type = object.type ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseAppTeamMessage(): AppTeamMessage {
  return { steamId: 0, name: "", message: "", color: "", time: 0 };
}

export const AppTeamMessage = {
  encode(message: AppTeamMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(8).uint64(message.steamId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.color !== "") {
      writer.uint32(34).string(message.color);
    }
    if (message.time !== 0) {
      writer.uint32(40).uint32(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppTeamMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.steamId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.color = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.time = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppTeamMessage {
    return {
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      message: isSet(object.message) ? String(object.message) : "",
      color: isSet(object.color) ? String(object.color) : "",
      time: isSet(object.time) ? Number(object.time) : 0,
    };
  },

  toJSON(message: AppTeamMessage): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.name !== undefined && (obj.name = message.name);
    message.message !== undefined && (obj.message = message.message);
    message.color !== undefined && (obj.color = message.color);
    message.time !== undefined && (obj.time = Math.round(message.time));
    return obj;
  },

  create<I extends Exact<DeepPartial<AppTeamMessage>, I>>(base?: I): AppTeamMessage {
    return AppTeamMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppTeamMessage>, I>>(object: I): AppTeamMessage {
    const message = createBaseAppTeamMessage();
    message.steamId = object.steamId ?? 0;
    message.name = object.name ?? "";
    message.message = object.message ?? "";
    message.color = object.color ?? "";
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseAppTeamChat(): AppTeamChat {
  return { messages: [] };
}

export const AppTeamChat = {
  encode(message: AppTeamChat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      AppTeamMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamChat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppTeamChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(AppTeamMessage.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppTeamChat {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => AppTeamMessage.fromJSON(e)) : [],
    };
  },

  toJSON(message: AppTeamChat): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? AppTeamMessage.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppTeamChat>, I>>(base?: I): AppTeamChat {
    return AppTeamChat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppTeamChat>, I>>(object: I): AppTeamChat {
    const message = createBaseAppTeamChat();
    message.messages = object.messages?.map((e) => AppTeamMessage.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAppMarker(): AppMarker {
  return {
    id: 0,
    type: 0,
    x: 0,
    y: 0,
    steamId: 0,
    rotation: 0,
    radius: 0,
    color1: undefined,
    color2: undefined,
    alpha: 0,
    name: "",
    outOfStock: false,
    sellOrders: [],
  };
}

export const AppMarker = {
  encode(message: AppMarker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.x !== 0) {
      writer.uint32(29).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(37).float(message.y);
    }
    if (message.steamId !== 0) {
      writer.uint32(40).uint64(message.steamId);
    }
    if (message.rotation !== 0) {
      writer.uint32(53).float(message.rotation);
    }
    if (message.radius !== 0) {
      writer.uint32(61).float(message.radius);
    }
    if (message.color1 !== undefined) {
      Vector4.encode(message.color1, writer.uint32(66).fork()).ldelim();
    }
    if (message.color2 !== undefined) {
      Vector4.encode(message.color2, writer.uint32(74).fork()).ldelim();
    }
    if (message.alpha !== 0) {
      writer.uint32(85).float(message.alpha);
    }
    if (message.name !== "") {
      writer.uint32(90).string(message.name);
    }
    if (message.outOfStock === true) {
      writer.uint32(96).bool(message.outOfStock);
    }
    for (const v of message.sellOrders) {
      AppMarker_SellOrder.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppMarker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppMarker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.x = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.y = reader.float();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.steamId = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 53) {
            break;
          }

          message.rotation = reader.float();
          continue;
        case 7:
          if (tag !== 61) {
            break;
          }

          message.radius = reader.float();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.color1 = Vector4.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.color2 = Vector4.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 85) {
            break;
          }

          message.alpha = reader.float();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.name = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.outOfStock = reader.bool();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.sellOrders.push(AppMarker_SellOrder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppMarker {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      type: isSet(object.type) ? appMarkerTypeFromJSON(object.type) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      rotation: isSet(object.rotation) ? Number(object.rotation) : 0,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      color1: isSet(object.color1) ? Vector4.fromJSON(object.color1) : undefined,
      color2: isSet(object.color2) ? Vector4.fromJSON(object.color2) : undefined,
      alpha: isSet(object.alpha) ? Number(object.alpha) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      outOfStock: isSet(object.outOfStock) ? Boolean(object.outOfStock) : false,
      sellOrders: Array.isArray(object?.sellOrders)
        ? object.sellOrders.map((e: any) => AppMarker_SellOrder.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AppMarker): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.type !== undefined && (obj.type = appMarkerTypeToJSON(message.type));
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.rotation !== undefined && (obj.rotation = message.rotation);
    message.radius !== undefined && (obj.radius = message.radius);
    message.color1 !== undefined && (obj.color1 = message.color1 ? Vector4.toJSON(message.color1) : undefined);
    message.color2 !== undefined && (obj.color2 = message.color2 ? Vector4.toJSON(message.color2) : undefined);
    message.alpha !== undefined && (obj.alpha = message.alpha);
    message.name !== undefined && (obj.name = message.name);
    message.outOfStock !== undefined && (obj.outOfStock = message.outOfStock);
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map((e) => e ? AppMarker_SellOrder.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppMarker>, I>>(base?: I): AppMarker {
    return AppMarker.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppMarker>, I>>(object: I): AppMarker {
    const message = createBaseAppMarker();
    message.id = object.id ?? 0;
    message.type = object.type ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.steamId = object.steamId ?? 0;
    message.rotation = object.rotation ?? 0;
    message.radius = object.radius ?? 0;
    message.color1 = (object.color1 !== undefined && object.color1 !== null)
      ? Vector4.fromPartial(object.color1)
      : undefined;
    message.color2 = (object.color2 !== undefined && object.color2 !== null)
      ? Vector4.fromPartial(object.color2)
      : undefined;
    message.alpha = object.alpha ?? 0;
    message.name = object.name ?? "";
    message.outOfStock = object.outOfStock ?? false;
    message.sellOrders = object.sellOrders?.map((e) => AppMarker_SellOrder.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAppMarker_SellOrder(): AppMarker_SellOrder {
  return {
    itemId: 0,
    quantity: 0,
    currencyId: 0,
    costPerItem: 0,
    amountInStock: 0,
    itemIsBlueprint: false,
    currencyIsBlueprint: false,
    itemCondition: 0,
    itemConditionMax: 0,
  };
}

export const AppMarker_SellOrder = {
  encode(message: AppMarker_SellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).int32(message.itemId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    if (message.currencyId !== 0) {
      writer.uint32(24).int32(message.currencyId);
    }
    if (message.costPerItem !== 0) {
      writer.uint32(32).int32(message.costPerItem);
    }
    if (message.amountInStock !== 0) {
      writer.uint32(40).int32(message.amountInStock);
    }
    if (message.itemIsBlueprint === true) {
      writer.uint32(48).bool(message.itemIsBlueprint);
    }
    if (message.currencyIsBlueprint === true) {
      writer.uint32(56).bool(message.currencyIsBlueprint);
    }
    if (message.itemCondition !== 0) {
      writer.uint32(69).float(message.itemCondition);
    }
    if (message.itemConditionMax !== 0) {
      writer.uint32(77).float(message.itemConditionMax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppMarker_SellOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppMarker_SellOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.itemId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.currencyId = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.costPerItem = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.amountInStock = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.itemIsBlueprint = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.currencyIsBlueprint = reader.bool();
          continue;
        case 8:
          if (tag !== 69) {
            break;
          }

          message.itemCondition = reader.float();
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.itemConditionMax = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppMarker_SellOrder {
    return {
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      currencyId: isSet(object.currencyId) ? Number(object.currencyId) : 0,
      costPerItem: isSet(object.costPerItem) ? Number(object.costPerItem) : 0,
      amountInStock: isSet(object.amountInStock) ? Number(object.amountInStock) : 0,
      itemIsBlueprint: isSet(object.itemIsBlueprint) ? Boolean(object.itemIsBlueprint) : false,
      currencyIsBlueprint: isSet(object.currencyIsBlueprint) ? Boolean(object.currencyIsBlueprint) : false,
      itemCondition: isSet(object.itemCondition) ? Number(object.itemCondition) : 0,
      itemConditionMax: isSet(object.itemConditionMax) ? Number(object.itemConditionMax) : 0,
    };
  },

  toJSON(message: AppMarker_SellOrder): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.currencyId !== undefined && (obj.currencyId = Math.round(message.currencyId));
    message.costPerItem !== undefined && (obj.costPerItem = Math.round(message.costPerItem));
    message.amountInStock !== undefined && (obj.amountInStock = Math.round(message.amountInStock));
    message.itemIsBlueprint !== undefined && (obj.itemIsBlueprint = message.itemIsBlueprint);
    message.currencyIsBlueprint !== undefined && (obj.currencyIsBlueprint = message.currencyIsBlueprint);
    message.itemCondition !== undefined && (obj.itemCondition = message.itemCondition);
    message.itemConditionMax !== undefined && (obj.itemConditionMax = message.itemConditionMax);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppMarker_SellOrder>, I>>(base?: I): AppMarker_SellOrder {
    return AppMarker_SellOrder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppMarker_SellOrder>, I>>(object: I): AppMarker_SellOrder {
    const message = createBaseAppMarker_SellOrder();
    message.itemId = object.itemId ?? 0;
    message.quantity = object.quantity ?? 0;
    message.currencyId = object.currencyId ?? 0;
    message.costPerItem = object.costPerItem ?? 0;
    message.amountInStock = object.amountInStock ?? 0;
    message.itemIsBlueprint = object.itemIsBlueprint ?? false;
    message.currencyIsBlueprint = object.currencyIsBlueprint ?? false;
    message.itemCondition = object.itemCondition ?? 0;
    message.itemConditionMax = object.itemConditionMax ?? 0;
    return message;
  },
};

function createBaseAppMapMarkers(): AppMapMarkers {
  return { markers: [] };
}

export const AppMapMarkers = {
  encode(message: AppMapMarkers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markers) {
      AppMarker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppMapMarkers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppMapMarkers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.markers.push(AppMarker.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppMapMarkers {
    return { markers: Array.isArray(object?.markers) ? object.markers.map((e: any) => AppMarker.fromJSON(e)) : [] };
  },

  toJSON(message: AppMapMarkers): unknown {
    const obj: any = {};
    if (message.markers) {
      obj.markers = message.markers.map((e) => e ? AppMarker.toJSON(e) : undefined);
    } else {
      obj.markers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppMapMarkers>, I>>(base?: I): AppMapMarkers {
    return AppMapMarkers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppMapMarkers>, I>>(object: I): AppMapMarkers {
    const message = createBaseAppMapMarkers();
    message.markers = object.markers?.map((e) => AppMarker.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAppClanInfo(): AppClanInfo {
  return { clanInfo: undefined };
}

export const AppClanInfo = {
  encode(message: AppClanInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clanInfo !== undefined) {
      ClanInfo.encode(message.clanInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppClanInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppClanInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clanInfo = ClanInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppClanInfo {
    return { clanInfo: isSet(object.clanInfo) ? ClanInfo.fromJSON(object.clanInfo) : undefined };
  },

  toJSON(message: AppClanInfo): unknown {
    const obj: any = {};
    message.clanInfo !== undefined && (obj.clanInfo = message.clanInfo ? ClanInfo.toJSON(message.clanInfo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppClanInfo>, I>>(base?: I): AppClanInfo {
    return AppClanInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppClanInfo>, I>>(object: I): AppClanInfo {
    const message = createBaseAppClanInfo();
    message.clanInfo = (object.clanInfo !== undefined && object.clanInfo !== null)
      ? ClanInfo.fromPartial(object.clanInfo)
      : undefined;
    return message;
  },
};

function createBaseAppClanMessage(): AppClanMessage {
  return { steamId: 0, name: "", message: "", time: 0 };
}

export const AppClanMessage = {
  encode(message: AppClanMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(8).uint64(message.steamId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.time !== 0) {
      writer.uint32(32).int64(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppClanMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppClanMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.steamId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.time = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppClanMessage {
    return {
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      message: isSet(object.message) ? String(object.message) : "",
      time: isSet(object.time) ? Number(object.time) : 0,
    };
  },

  toJSON(message: AppClanMessage): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.name !== undefined && (obj.name = message.name);
    message.message !== undefined && (obj.message = message.message);
    message.time !== undefined && (obj.time = Math.round(message.time));
    return obj;
  },

  create<I extends Exact<DeepPartial<AppClanMessage>, I>>(base?: I): AppClanMessage {
    return AppClanMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppClanMessage>, I>>(object: I): AppClanMessage {
    const message = createBaseAppClanMessage();
    message.steamId = object.steamId ?? 0;
    message.name = object.name ?? "";
    message.message = object.message ?? "";
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseAppClanChat(): AppClanChat {
  return { messages: [] };
}

export const AppClanChat = {
  encode(message: AppClanChat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      AppClanMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppClanChat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppClanChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(AppClanMessage.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppClanChat {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => AppClanMessage.fromJSON(e)) : [],
    };
  },

  toJSON(message: AppClanChat): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? AppClanMessage.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppClanChat>, I>>(base?: I): AppClanChat {
    return AppClanChat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppClanChat>, I>>(object: I): AppClanChat {
    const message = createBaseAppClanChat();
    message.messages = object.messages?.map((e) => AppClanMessage.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAppNexusAuth(): AppNexusAuth {
  return { serverId: "", playerToken: 0 };
}

export const AppNexusAuth = {
  encode(message: AppNexusAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverId !== "") {
      writer.uint32(10).string(message.serverId);
    }
    if (message.playerToken !== 0) {
      writer.uint32(16).int32(message.playerToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppNexusAuth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppNexusAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serverId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.playerToken = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppNexusAuth {
    return {
      serverId: isSet(object.serverId) ? String(object.serverId) : "",
      playerToken: isSet(object.playerToken) ? Number(object.playerToken) : 0,
    };
  },

  toJSON(message: AppNexusAuth): unknown {
    const obj: any = {};
    message.serverId !== undefined && (obj.serverId = message.serverId);
    message.playerToken !== undefined && (obj.playerToken = Math.round(message.playerToken));
    return obj;
  },

  create<I extends Exact<DeepPartial<AppNexusAuth>, I>>(base?: I): AppNexusAuth {
    return AppNexusAuth.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppNexusAuth>, I>>(object: I): AppNexusAuth {
    const message = createBaseAppNexusAuth();
    message.serverId = object.serverId ?? "";
    message.playerToken = object.playerToken ?? 0;
    return message;
  },
};

function createBaseAppTeamChanged(): AppTeamChanged {
  return { playerId: 0, teamInfo: undefined };
}

export const AppTeamChanged = {
  encode(message: AppTeamChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).uint64(message.playerId);
    }
    if (message.teamInfo !== undefined) {
      AppTeamInfo.encode(message.teamInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppTeamChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.playerId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.teamInfo = AppTeamInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppTeamChanged {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      teamInfo: isSet(object.teamInfo) ? AppTeamInfo.fromJSON(object.teamInfo) : undefined,
    };
  },

  toJSON(message: AppTeamChanged): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.teamInfo !== undefined &&
      (obj.teamInfo = message.teamInfo ? AppTeamInfo.toJSON(message.teamInfo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppTeamChanged>, I>>(base?: I): AppTeamChanged {
    return AppTeamChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppTeamChanged>, I>>(object: I): AppTeamChanged {
    const message = createBaseAppTeamChanged();
    message.playerId = object.playerId ?? 0;
    message.teamInfo = (object.teamInfo !== undefined && object.teamInfo !== null)
      ? AppTeamInfo.fromPartial(object.teamInfo)
      : undefined;
    return message;
  },
};

function createBaseAppNewTeamMessage(): AppNewTeamMessage {
  return { message: undefined };
}

export const AppNewTeamMessage = {
  encode(message: AppNewTeamMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      AppTeamMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppNewTeamMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppNewTeamMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = AppTeamMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppNewTeamMessage {
    return { message: isSet(object.message) ? AppTeamMessage.fromJSON(object.message) : undefined };
  },

  toJSON(message: AppNewTeamMessage): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message ? AppTeamMessage.toJSON(message.message) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppNewTeamMessage>, I>>(base?: I): AppNewTeamMessage {
    return AppNewTeamMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppNewTeamMessage>, I>>(object: I): AppNewTeamMessage {
    const message = createBaseAppNewTeamMessage();
    message.message = (object.message !== undefined && object.message !== null)
      ? AppTeamMessage.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseAppEntityChanged(): AppEntityChanged {
  return { entityId: 0, payload: undefined };
}

export const AppEntityChanged = {
  encode(message: AppEntityChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== 0) {
      writer.uint32(8).uint32(message.entityId);
    }
    if (message.payload !== undefined) {
      AppEntityPayload.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppEntityChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.entityId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = AppEntityPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppEntityChanged {
    return {
      entityId: isSet(object.entityId) ? Number(object.entityId) : 0,
      payload: isSet(object.payload) ? AppEntityPayload.fromJSON(object.payload) : undefined,
    };
  },

  toJSON(message: AppEntityChanged): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = Math.round(message.entityId));
    message.payload !== undefined &&
      (obj.payload = message.payload ? AppEntityPayload.toJSON(message.payload) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppEntityChanged>, I>>(base?: I): AppEntityChanged {
    return AppEntityChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppEntityChanged>, I>>(object: I): AppEntityChanged {
    const message = createBaseAppEntityChanged();
    message.entityId = object.entityId ?? 0;
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? AppEntityPayload.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseAppClanChanged(): AppClanChanged {
  return { clanInfo: undefined };
}

export const AppClanChanged = {
  encode(message: AppClanChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clanInfo !== undefined) {
      ClanInfo.encode(message.clanInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppClanChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppClanChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clanInfo = ClanInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppClanChanged {
    return { clanInfo: isSet(object.clanInfo) ? ClanInfo.fromJSON(object.clanInfo) : undefined };
  },

  toJSON(message: AppClanChanged): unknown {
    const obj: any = {};
    message.clanInfo !== undefined && (obj.clanInfo = message.clanInfo ? ClanInfo.toJSON(message.clanInfo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppClanChanged>, I>>(base?: I): AppClanChanged {
    return AppClanChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppClanChanged>, I>>(object: I): AppClanChanged {
    const message = createBaseAppClanChanged();
    message.clanInfo = (object.clanInfo !== undefined && object.clanInfo !== null)
      ? ClanInfo.fromPartial(object.clanInfo)
      : undefined;
    return message;
  },
};

function createBaseAppNewClanMessage(): AppNewClanMessage {
  return { clanId: 0, message: undefined };
}

export const AppNewClanMessage = {
  encode(message: AppNewClanMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clanId !== 0) {
      writer.uint32(8).int64(message.clanId);
    }
    if (message.message !== undefined) {
      AppClanMessage.encode(message.message, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppNewClanMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppNewClanMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.clanId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = AppClanMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppNewClanMessage {
    return {
      clanId: isSet(object.clanId) ? Number(object.clanId) : 0,
      message: isSet(object.message) ? AppClanMessage.fromJSON(object.message) : undefined,
    };
  },

  toJSON(message: AppNewClanMessage): unknown {
    const obj: any = {};
    message.clanId !== undefined && (obj.clanId = Math.round(message.clanId));
    message.message !== undefined &&
      (obj.message = message.message ? AppClanMessage.toJSON(message.message) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppNewClanMessage>, I>>(base?: I): AppNewClanMessage {
    return AppNewClanMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppNewClanMessage>, I>>(object: I): AppNewClanMessage {
    const message = createBaseAppNewClanMessage();
    message.clanId = object.clanId ?? 0;
    message.message = (object.message !== undefined && object.message !== null)
      ? AppClanMessage.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseAppCameraSubscribe(): AppCameraSubscribe {
  return { cameraId: "" };
}

export const AppCameraSubscribe = {
  encode(message: AppCameraSubscribe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cameraId !== "") {
      writer.uint32(10).string(message.cameraId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppCameraSubscribe {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppCameraSubscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cameraId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppCameraSubscribe {
    return { cameraId: isSet(object.cameraId) ? String(object.cameraId) : "" };
  },

  toJSON(message: AppCameraSubscribe): unknown {
    const obj: any = {};
    message.cameraId !== undefined && (obj.cameraId = message.cameraId);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppCameraSubscribe>, I>>(base?: I): AppCameraSubscribe {
    return AppCameraSubscribe.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppCameraSubscribe>, I>>(object: I): AppCameraSubscribe {
    const message = createBaseAppCameraSubscribe();
    message.cameraId = object.cameraId ?? "";
    return message;
  },
};

function createBaseAppCameraInput(): AppCameraInput {
  return { buttons: 0, mouseDelta: undefined };
}

export const AppCameraInput = {
  encode(message: AppCameraInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buttons !== 0) {
      writer.uint32(8).int32(message.buttons);
    }
    if (message.mouseDelta !== undefined) {
      Vector2.encode(message.mouseDelta, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppCameraInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppCameraInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.buttons = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mouseDelta = Vector2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppCameraInput {
    return {
      buttons: isSet(object.buttons) ? Number(object.buttons) : 0,
      mouseDelta: isSet(object.mouseDelta) ? Vector2.fromJSON(object.mouseDelta) : undefined,
    };
  },

  toJSON(message: AppCameraInput): unknown {
    const obj: any = {};
    message.buttons !== undefined && (obj.buttons = Math.round(message.buttons));
    message.mouseDelta !== undefined &&
      (obj.mouseDelta = message.mouseDelta ? Vector2.toJSON(message.mouseDelta) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppCameraInput>, I>>(base?: I): AppCameraInput {
    return AppCameraInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppCameraInput>, I>>(object: I): AppCameraInput {
    const message = createBaseAppCameraInput();
    message.buttons = object.buttons ?? 0;
    message.mouseDelta = (object.mouseDelta !== undefined && object.mouseDelta !== null)
      ? Vector2.fromPartial(object.mouseDelta)
      : undefined;
    return message;
  },
};

function createBaseAppCameraInfo(): AppCameraInfo {
  return { width: 0, height: 0, nearPlane: 0, farPlane: 0, controlFlags: 0 };
}

export const AppCameraInfo = {
  encode(message: AppCameraInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).int32(message.height);
    }
    if (message.nearPlane !== 0) {
      writer.uint32(29).float(message.nearPlane);
    }
    if (message.farPlane !== 0) {
      writer.uint32(37).float(message.farPlane);
    }
    if (message.controlFlags !== 0) {
      writer.uint32(40).int32(message.controlFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppCameraInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppCameraInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.width = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = reader.int32();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.nearPlane = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.farPlane = reader.float();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.controlFlags = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppCameraInfo {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      nearPlane: isSet(object.nearPlane) ? Number(object.nearPlane) : 0,
      farPlane: isSet(object.farPlane) ? Number(object.farPlane) : 0,
      controlFlags: isSet(object.controlFlags) ? Number(object.controlFlags) : 0,
    };
  },

  toJSON(message: AppCameraInfo): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.nearPlane !== undefined && (obj.nearPlane = message.nearPlane);
    message.farPlane !== undefined && (obj.farPlane = message.farPlane);
    message.controlFlags !== undefined && (obj.controlFlags = Math.round(message.controlFlags));
    return obj;
  },

  create<I extends Exact<DeepPartial<AppCameraInfo>, I>>(base?: I): AppCameraInfo {
    return AppCameraInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppCameraInfo>, I>>(object: I): AppCameraInfo {
    const message = createBaseAppCameraInfo();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.nearPlane = object.nearPlane ?? 0;
    message.farPlane = object.farPlane ?? 0;
    message.controlFlags = object.controlFlags ?? 0;
    return message;
  },
};

function createBaseAppCameraRays(): AppCameraRays {
  return { verticalFov: 0, sampleOffset: 0, rayData: new Uint8Array(), distance: 0, entities: [] };
}

export const AppCameraRays = {
  encode(message: AppCameraRays, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verticalFov !== 0) {
      writer.uint32(13).float(message.verticalFov);
    }
    if (message.sampleOffset !== 0) {
      writer.uint32(16).int32(message.sampleOffset);
    }
    if (message.rayData.length !== 0) {
      writer.uint32(26).bytes(message.rayData);
    }
    if (message.distance !== 0) {
      writer.uint32(37).float(message.distance);
    }
    for (const v of message.entities) {
      AppCameraRays_Entity.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppCameraRays {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppCameraRays();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.verticalFov = reader.float();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sampleOffset = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rayData = reader.bytes();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.distance = reader.float();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entities.push(AppCameraRays_Entity.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppCameraRays {
    return {
      verticalFov: isSet(object.verticalFov) ? Number(object.verticalFov) : 0,
      sampleOffset: isSet(object.sampleOffset) ? Number(object.sampleOffset) : 0,
      rayData: isSet(object.rayData) ? bytesFromBase64(object.rayData) : new Uint8Array(),
      distance: isSet(object.distance) ? Number(object.distance) : 0,
      entities: Array.isArray(object?.entities)
        ? object.entities.map((e: any) => AppCameraRays_Entity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AppCameraRays): unknown {
    const obj: any = {};
    message.verticalFov !== undefined && (obj.verticalFov = message.verticalFov);
    message.sampleOffset !== undefined && (obj.sampleOffset = Math.round(message.sampleOffset));
    message.rayData !== undefined &&
      (obj.rayData = base64FromBytes(message.rayData !== undefined ? message.rayData : new Uint8Array()));
    message.distance !== undefined && (obj.distance = message.distance);
    if (message.entities) {
      obj.entities = message.entities.map((e) => e ? AppCameraRays_Entity.toJSON(e) : undefined);
    } else {
      obj.entities = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppCameraRays>, I>>(base?: I): AppCameraRays {
    return AppCameraRays.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppCameraRays>, I>>(object: I): AppCameraRays {
    const message = createBaseAppCameraRays();
    message.verticalFov = object.verticalFov ?? 0;
    message.sampleOffset = object.sampleOffset ?? 0;
    message.rayData = object.rayData ?? new Uint8Array();
    message.distance = object.distance ?? 0;
    message.entities = object.entities?.map((e) => AppCameraRays_Entity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAppCameraRays_Entity(): AppCameraRays_Entity {
  return { entityId: 0, type: 1, position: undefined, rotation: undefined, size: undefined, name: "" };
}

export const AppCameraRays_Entity = {
  encode(message: AppCameraRays_Entity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== 0) {
      writer.uint32(8).uint32(message.entityId);
    }
    if (message.type !== 1) {
      writer.uint32(16).int32(message.type);
    }
    if (message.position !== undefined) {
      Vector3.encode(message.position, writer.uint32(26).fork()).ldelim();
    }
    if (message.rotation !== undefined) {
      Vector3.encode(message.rotation, writer.uint32(34).fork()).ldelim();
    }
    if (message.size !== undefined) {
      Vector3.encode(message.size, writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppCameraRays_Entity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppCameraRays_Entity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.entityId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.position = Vector3.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rotation = Vector3.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.size = Vector3.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppCameraRays_Entity {
    return {
      entityId: isSet(object.entityId) ? Number(object.entityId) : 0,
      type: isSet(object.type) ? appCameraRays_EntityTypeFromJSON(object.type) : 1,
      position: isSet(object.position) ? Vector3.fromJSON(object.position) : undefined,
      rotation: isSet(object.rotation) ? Vector3.fromJSON(object.rotation) : undefined,
      size: isSet(object.size) ? Vector3.fromJSON(object.size) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: AppCameraRays_Entity): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = Math.round(message.entityId));
    message.type !== undefined && (obj.type = appCameraRays_EntityTypeToJSON(message.type));
    message.position !== undefined && (obj.position = message.position ? Vector3.toJSON(message.position) : undefined);
    message.rotation !== undefined && (obj.rotation = message.rotation ? Vector3.toJSON(message.rotation) : undefined);
    message.size !== undefined && (obj.size = message.size ? Vector3.toJSON(message.size) : undefined);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppCameraRays_Entity>, I>>(base?: I): AppCameraRays_Entity {
    return AppCameraRays_Entity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppCameraRays_Entity>, I>>(object: I): AppCameraRays_Entity {
    const message = createBaseAppCameraRays_Entity();
    message.entityId = object.entityId ?? 0;
    message.type = object.type ?? 1;
    message.position = (object.position !== undefined && object.position !== null)
      ? Vector3.fromPartial(object.position)
      : undefined;
    message.rotation = (object.rotation !== undefined && object.rotation !== null)
      ? Vector3.fromPartial(object.rotation)
      : undefined;
    message.size = (object.size !== undefined && object.size !== null) ? Vector3.fromPartial(object.size) : undefined;
    message.name = object.name ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
