import { Strategy } from 'passport-jwt';
import { AuthService } from '../provider/auth.service';
import { UserAuthData, JwtPayload } from '../auth.types';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: JwtPayload): Promise<UserAuthData>;
}
export {};
