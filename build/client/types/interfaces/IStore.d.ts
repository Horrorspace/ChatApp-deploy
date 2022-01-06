import { IToken } from '@interfaces/IAuth';
import { IUser } from '@interfaces/IUser';
import { IMessage } from '@interfaces/IMessage';
export interface IAuthState {
    user: IUser | null;
    token: IToken | null;
    userLoading: boolean;
    tokenLoading: boolean;
}
export interface IContactsState {
    contacts: IUser[];
    currentContact: IUser | null;
}
export interface IRootState {
    Auth: IAuthState;
    Contacts: IContactsState;
    Messages: IMessage[];
    Users: IUser[];
}
