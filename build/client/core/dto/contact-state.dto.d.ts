import { IContactsState } from '@interfaces/IStore';
import { IUser } from '@interfaces/IUser';
export declare class ContactsStateDto implements IContactsState {
    contacts: IUser[];
    currentContact: IUser | null;
    constructor(contacts: IUser[], currentContact: IUser | null);
    getState(): IContactsState;
}
