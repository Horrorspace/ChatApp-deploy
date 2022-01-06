import { AccessToken } from '../auth.types';
export declare class TokenDto implements AccessToken {
    readonly access_token: string;
    constructor(access_token: string);
}
