import { AbstractSocket } from '@api/socket/abstract.socket';
import { INewMessage } from '@interfaces/IMessage';
export declare class MessagesSocket extends AbstractSocket {
    private static onMessage;
    private static sendAuth;
    static sendMessage(message: INewMessage): void;
    static refreshToken(): void;
    static clearToken(): void;
    static start(): void;
    static stop(): void;
}
