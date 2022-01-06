import { UserEmail } from '../users.types';
export declare class UserEmailDto implements UserEmail {
    readonly email: string;
    constructor(email: string);
}
