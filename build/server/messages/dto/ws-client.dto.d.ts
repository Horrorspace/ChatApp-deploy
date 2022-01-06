import { wsClient } from '../messages.types';
export declare class WsClientDto implements wsClient {
    readonly wsId: string;
    readonly id: number;
    constructor(wsId: string, id: number);
}
