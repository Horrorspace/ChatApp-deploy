import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class UnauthorizedGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
