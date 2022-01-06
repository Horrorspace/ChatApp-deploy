import { UserCreationAttrs } from '../../users/users.types';
export declare class CreateUserDto implements UserCreationAttrs {
    readonly username: string;
    readonly email: string;
    readonly password: string;
    constructor(username: string, email: string, password: string);
}
