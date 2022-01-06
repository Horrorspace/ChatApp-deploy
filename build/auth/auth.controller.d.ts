import { Request as Req } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { TokenDto } from './dto/token.dto';
import { AuthService } from './provider/auth.service';
import { UserEntity } from '../users/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: Req): Promise<UserEntity>;
    logout(req: Req): Promise<string>;
    register(creationAttrs: CreateUserDto): Promise<UserEntity>;
    getToken(req: Req): Promise<TokenDto | null>;
    getUser(req: Req): Promise<UserEntity | null>;
    jwtAuthTest(req: Req): Promise<string>;
}
