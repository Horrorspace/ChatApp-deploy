import { ContactsActTypes } from '@store/types/ContactsActTypes';
import { IUser, IOnline } from '@interfaces/IUser';
export declare class ContactsActions {
    private static getContactsThunkAction;
    static setContacts: import("@reduxjs/toolkit").ActionCreatorWithPayload<IUser[], ContactsActTypes>;
    static addContact: import("@reduxjs/toolkit").ActionCreatorWithPayload<IUser, ContactsActTypes>;
    static setOnline: import("@reduxjs/toolkit").ActionCreatorWithPayload<IOnline, ContactsActTypes>;
    static deleteContact: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, ContactsActTypes>;
    static setCurrentContact: import("@reduxjs/toolkit").ActionCreatorWithPayload<IUser, ContactsActTypes>;
    static clearCurrentContact: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<ContactsActTypes>;
    static getContactsThunk: import("@reduxjs/toolkit").AsyncThunk<IUser[], number[], {}>;
}
