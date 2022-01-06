import { IAuthState } from '@interfaces/IStore';
import { IToken } from '@interfaces/IAuth';
import { IUser } from '@interfaces/IUser';
export declare class AuthDto implements IAuthState {
    readonly user: IUser | null;
    readonly token: IToken | null;
    readonly userLoading: boolean;
    readonly tokenLoading: boolean;
    constructor(user: IUser | null, token: IToken | null, userLoading: boolean, tokenLoading: boolean);
}
