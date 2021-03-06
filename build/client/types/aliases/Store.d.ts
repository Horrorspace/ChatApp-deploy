import { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit';
import { MessagesActTypes } from '@store/types/MessagesActTypes';
import { AuthActions } from '@store/actions/AuthActions';
import { ContactsActions } from '@store/actions/ContactsActions';
import { MessagesActions } from '@store/actions/MessagesActions';
export declare type MessageAction<T> = ActionCreatorWithPayload<T, MessagesActTypes>;
export declare type MessagePayloadAction<P> = PayloadAction<P, MessagesActTypes>;
export declare type AuthAction = typeof AuthActions.clearAuth | typeof AuthActions.clearToken | typeof AuthActions.getTokenThunk | typeof AuthActions.getUserThunk | typeof AuthActions.loginThunk | typeof AuthActions.logoutThunk | typeof AuthActions.registerThunk | typeof AuthActions.setAuth | typeof AuthActions.setToken;
export declare type ContactsAction = typeof ContactsActions.addContact | typeof ContactsActions.deleteContact | typeof ContactsActions.getContactsThunk | typeof ContactsActions.setContacts | typeof ContactsActions.setOnline;
export declare type MessagesAction = typeof MessagesActions.addMessage | typeof MessagesActions.deleteMessage | typeof MessagesActions.deleteMessageThunk | typeof MessagesActions.getAllMessagesThunk | typeof MessagesActions.sendNewMessage | typeof MessagesActions.setMessages | typeof MessagesActions.setReadMessage | typeof MessagesActions.setReadMessageThunk;
export declare type StoreAction = AuthAction | ContactsAction | MessagesAction;
