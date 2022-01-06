export interface MessageId {
    id: number;
}
export interface MessageCreationAttrsRaw {
    text: string;
    toUserId: number;
}
export interface MessageCreationAttrs extends MessageCreationAttrsRaw {
    fromUserId: number;
}
export interface MessageAttrs extends MessageCreationAttrs {
    id: number;
    date: Date;
    readed: boolean;
}
export interface wsClient {
    wsId: string;
    id: number;
}
