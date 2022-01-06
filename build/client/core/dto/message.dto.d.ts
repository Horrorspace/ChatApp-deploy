import { IMessage } from '@interfaces/IMessage';
import { NewMessageDto } from './new-message.dto';
export declare class MessageDto extends NewMessageDto implements IMessage {
    readonly id: number;
    readonly fromUserId: number;
    readonly date: Date;
    readed: boolean;
    constructor(id: number, text: string, fromUserId: number, toUserId: number, date: Date, readed: boolean);
}
