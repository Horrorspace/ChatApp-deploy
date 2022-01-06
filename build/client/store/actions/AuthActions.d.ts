import { ILogin, IRegister } from '@interfaces/IAuth';
import { IUser } from '@interfaces/IUser';
export declare class AuthActions {
    private static loginThunkAction;
    private static registerThunkAction;
    private static logoutThunkAction;
    private static getTokenThunkAction;
    private static getUserThunkAction;
    static setAuth: import("@reduxjs/toolkit").ActionCreatorWithPayload<IUser, string>;
    static setUserLoading: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
    static setTokenLoading: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
    static clearAuth: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
    static setToken: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
    static clearToken: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
    static loginThunk: import("@reduxjs/toolkit").AsyncThunk<void, ILogin, {}>;
    static registerThunk: import("@reduxjs/toolkit").AsyncThunk<IUser, IRegister, {}>;
    static logoutThunk: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
    static getTokenThunk: import("@reduxjs/toolkit").AsyncThunk<string, void, {}>;
    static getUserThunk: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
}
