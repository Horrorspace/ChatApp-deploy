import { ILogin } from '@interfaces/IAuth';
export declare class LoginDto implements ILogin {
    readonly email: string;
    readonly password: string;
    constructor(email: string, password: string);
}
