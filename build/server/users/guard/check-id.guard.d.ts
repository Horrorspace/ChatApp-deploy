import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class CheckIdGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
