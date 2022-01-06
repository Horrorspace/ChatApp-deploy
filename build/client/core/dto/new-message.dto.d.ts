import { INewMessage } from '@interfaces/IMessage';
export declare class NewMessageDto implements INewMessage {
    readonly text: string;
    readonly toUserId: number;
    constructor(text: string, toUserId: number);
    getMessage(): {
        text: string;
        toUserId: number;
    };
}
