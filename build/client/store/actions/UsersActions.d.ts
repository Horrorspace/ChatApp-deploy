import { UsersActTypes } from '@store/types/UsersActTypes';
import { IUser } from '@interfaces/IUser';
export declare class UsersActions {
    private static getUsersThunkAction;
    static setUsers: import("@reduxjs/toolkit").ActionCreatorWithPayload<IUser[], UsersActTypes>;
    static getUsersThunk: import("@reduxjs/toolkit").AsyncThunk<IUser[], void, {}>;
}
