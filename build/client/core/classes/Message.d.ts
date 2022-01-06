import { MessageDto } from '@core/dto/message.dto';
import { IMessage } from '@interfaces/IMessage';
export declare class Message extends MessageDto {
    constructor({ id, text, fromUserId, toUserId, date, readed }: IMessage);
    getMessage(): IMessage;
    getId(): number;
    setRead(): IMessage;
}
