export interface INewMessage {
    text: string;
    toUserId: number;
}
export interface IMessage extends INewMessage {
    id: number;
    fromUserId: number;
    date: Date;
    readed: boolean;
}
