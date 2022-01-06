import { IContactsState } from '@interfaces/IStore';
import { IUser, IOnline } from '@interfaces/IUser';
export declare class ContactsRepository {
    contacts: IUser[];
    currentContact: IUser | null;
    constructor({ contacts, currentContact }: IContactsState);
    getState(): IContactsState;
    getContacts(): IUser[];
    getCurrentContact(): IUser | null;
    setContacts(contacts: IUser[]): IUser[];
    addContact(contact: IUser): IUser[];
    setOnline(options: IOnline): IUser[];
    deleteUser(id: number): IUser[];
    setCurrentContact(currentContact: IUser): IUser | null;
    clearCurrentContact(): void;
}
