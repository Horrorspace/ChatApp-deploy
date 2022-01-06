import { CanActivate, ExecutionContext } from '@nestjs/common';
declare const BasicAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class BasicAuthGuard extends BasicAuthGuard_base implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
