import { CanActivate, ExecutionContext } from '@nestjs/common';
import { MessagesService } from '../messages.service';
export declare class MessageIdCheckGuard implements CanActivate {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
