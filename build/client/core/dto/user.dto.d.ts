import { IUser } from '@interfaces/IUser';
export declare class UserDto implements IUser {
    readonly id: number;
    online: boolean;
    readonly avatarSrc: string;
    confirmed: boolean;
    readonly username: string;
    readonly email: string;
    constructor(id: number, online: boolean, avatarSrc: string, confirmed: boolean, username: string, email: string);
}
