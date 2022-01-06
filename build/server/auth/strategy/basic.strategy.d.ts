import { BasicStrategy as Strategy } from 'passport-http';
import { AuthService } from '../provider/auth.service';
import { UserAuthData } from '../auth.types';
declare const BasicStrategy_base: new (...args: any[]) => Strategy;
export declare class BasicStrategy extends BasicStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<UserAuthData>;
}
export {};
