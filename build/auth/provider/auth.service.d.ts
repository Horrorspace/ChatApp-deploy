import { UserAttrs, UserCreationAttrs } from '../../users/users.types';
import { UsersService } from '../../users/users.service';
import { LoginAttrs, AccessToken, JwtPayload } from '../auth.types';
import { User } from '@server/users/users.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser({ email, password }: LoginAttrs): Promise<UserAttrs | null>;
    registerUser(creationAttrs: UserCreationAttrs): Promise<User | null>;
    validateUserbyJwt({ sub }: JwtPayload): Promise<UserAttrs | null>;
    getToken(userAttrs: UserAttrs): Promise<AccessToken | null>;
    getUser(id: number): Promise<User | null>;
}
