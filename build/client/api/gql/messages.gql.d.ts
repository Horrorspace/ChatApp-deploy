import { AbstractGql } from '@api/gql/abstract.gql';
import { IMessage } from '@interfaces/IMessage';
interface IMessageRes {
    messages: IMessage[];
}
export declare class MessagesGql extends AbstractGql {
    private static getAllMessagesQuery;
    static getAllMessages(): Promise<IMessageRes>;
}
export {};
