import { IUser } from '@interfaces/IUser';
import { IToken } from '@interfaces/IAuth';
import { IAuthState } from '@interfaces/IStore';
export declare class AuthRepository {
    private user;
    private token;
    private userLoading;
    private tokenLoading;
    constructor({ user, token, userLoading, tokenLoading }: IAuthState);
    getAuth(): IAuthState;
    getUser(): IUser | null;
    getToken(): IToken | null;
    getUserLoading(): boolean;
    getTokenLoading(): boolean;
    setUser(user: IUser): IUser | null;
    setToken(tokenStr: string): IToken | null;
    setUserLoading(userLoading: boolean): boolean;
    setTokenLoading(tokenLoading: boolean): boolean;
    clearUser(): void;
    clearToken(): void;
    clearAuth(): void;
}
