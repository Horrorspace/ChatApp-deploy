import { IToken } from '@interfaces/IAuth';
export declare class TokenDto implements IToken {
    readonly access_token: string;
    constructor(access_token: string);
    getValue(): {
        access_token: string;
    };
}
