import { IMessage } from '@interfaces/IMessage';
import { Message } from '@core/classes/Message';
export declare class MessagesRepository {
    private messages;
    constructor(messages: IMessage[]);
    getAllMessages(): Message[];
    addMessage(message: IMessage): Message[];
    setReadMessage(id: number): Message[];
    deleteMessage(id: number): void;
    getMessages(): IMessage[];
}
