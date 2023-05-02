import WebSocket, { MessageEvent } from 'ws'
import { Buffer } from 'node:buffer';
import { EventEmitter } from "events";

import { AppMessage, AppRequest } from '../static/rustplus.proto';
import { MessageRequestData } from '../interfaces/rustplus';

class RustPlus extends EventEmitter {
    private server_ip: string;
    private port: string;
    private playerId: string;
    private playerToken: string;
    private useFacepuncProxy: boolean;

    private seq: number;
    private seqCallbacks: Function[];


    private websocket: WebSocket | null;

    constructor(server_ip: string, port: string, playerId: string, playerToken: string, useFacepuncProxy: boolean = false) {
        super();

        this.server_ip = server_ip;
        this.port = port;
        this.playerId = playerId;
        this.playerToken = playerToken;
        this.useFacepuncProxy = useFacepuncProxy;

        this.seq = 0;
        this.seqCallbacks = [];

        this.websocket = null;

    }

    connect() {
        if (this.websocket) {
            this.disconnect();
        }

        const rustServerAddress = this.useFacepuncProxy ? `wss://companion-rust.facepunch.com/game/${this.server_ip}/${this.port}` : `wss://${this.server_ip}:${this.port}`;

        this.websocket = new WebSocket(rustServerAddress);
        this.websocket.binaryType = 'arraybuffer';

        this.websocket.on('open', () => {
            this.emit('connected');
        })

        this.websocket.on('message', (event: MessageEvent) => {
            const messageBuffer = Buffer.from(event.data as string);
            const message = AppMessage.decode(messageBuffer);

            if (message.response && message.response.seq && this.seqCallbacks[message.response.seq]) {
                const callback = this.seqCallbacks[message.response.seq];

                const result = callback(message);

                if (result) return;
            }

            this.emit('message', message);

        })

        this.websocket.on('close', () => {
            this.emit('disconnected');
        })
    }

    disconnect() {
        if (this.websocket) {
            this.websocket.terminate();

            this.websocket = null;
        }
    }

    isConnected() {
        return this.websocket !== null;
    }

    sendRequest(data: MessageRequestData, callback: Function) {
        if (data === null || this.websocket === null) return;

        let currentSeq = ++this.seq;

        if (callback) {
            this.seqCallbacks[currentSeq] = callback;
        }

        const request = AppRequest.fromJSON({
            seq: currentSeq,
            playerId: this.playerId,
            playerToken: this.playerToken,
            ...data,
        })

        this.websocket.send(AppRequest.encode(request).finish())

        this.emit('request', request);
    }

    sendRequestAsync(data: MessageRequestData, timeoutMilliseconds: number = 10000) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error('Timeout reached while waiting for response'));
            }, timeoutMilliseconds);

            this.sendRequest(data, (message: AppMessage) => {
                clearTimeout(timeout);

                if (message.response?.error) {
                    reject(message.response.error);
                }

                resolve(message.response);
            })
        })
    }

    setEntityValue(entityId: string, value: number | boolean, callback: Function) {
       this.sendRequest({
            entityId,
            setEntityValue: {
                value,
            },
       }, callback);
    }

    turnSmartSwitchOn(entityId: string, callback: Function) {
        this.setEntityValue(entityId, true, callback);
    }

    turnSmartSwitchOff(entityId: string, callback: Function) {
        this.setEntityValue(entityId, false, callback);
    }

    sendTeamMessage(message: string, callback: Function) {
        this.sendRequest({
            sendTeamMessage: {
                message,
            }
        }, callback);
    }

    getEntityInfo(entityId: string, callback: Function) {
        this.sendRequest({
            entityId,
            getEntityInfo: {}
        }, callback);
    }

    getMap(callback: Function) {
        this.sendRequest({
            getMap: {}
        }, callback);
    }

    getTime(callback: Function) {
        this.sendRequest({
            getTime: {}
        }, callback);
    }

    getMapMarkers(callback: Function) {
        this.sendRequest({
            getMapMarkers: {}
        }, callback);
    }

    getInfo(callback: Function) {
        this.sendRequest({
            getInfo: {}
        }, callback);
    }

    getTeamInfo(callback: Function) {
        this.sendRequest({
            getTeamInfo: {}
        }, callback)
    }
}

export default RustPlus;
