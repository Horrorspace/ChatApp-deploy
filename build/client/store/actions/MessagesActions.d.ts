import { MessagesActTypes } from '@store/types/MessagesActTypes';
import { IMessage, INewMessage } from '@interfaces/IMessage';
export declare class MessagesActions {
    private static getAllMessagesThunkAction;
    private static setReadMessageThunkAction;
    private static deleteMessageThunkAction;
    static setMessages: import("@reduxjs/toolkit").ActionCreatorWithPayload<IMessage[], MessagesActTypes>;
    static addMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<IMessage, MessagesActTypes>;
    static sendNewMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<INewMessage, MessagesActTypes>;
    static setReadMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, MessagesActTypes>;
    static deleteMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, MessagesActTypes>;
    static getAllMessagesThunk: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
    static setReadMessageThunk: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
    static deleteMessageThunk: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
}
