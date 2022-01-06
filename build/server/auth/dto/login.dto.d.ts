import { LoginAttrs } from '../auth.types';
export declare class LoginDto implements LoginAttrs {
    readonly email: string;
    readonly password: string;
    constructor(email: string, password: string);
}
