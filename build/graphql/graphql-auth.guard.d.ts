import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare class GqlAuthGuard implements CanActivate {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    private getHeaders;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
