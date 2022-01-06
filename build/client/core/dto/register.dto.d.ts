import { IRegister } from '@interfaces/IAuth';
import { LoginDto } from './login.dto';
export declare class RegisterDto extends LoginDto implements IRegister {
    readonly username: string;
    constructor(email: string, password: string, username: string);
}
