import { MessagesService } from './messages.service';
import { MessageEntity } from './message.entity';
import { JwtService } from '@nestjs/jwt';
import { headersObj } from '../auth/auth.types';
export declare class MessagesResolver {
    private readonly messagesService;
    private readonly jwtService;
    constructor(messagesService: MessagesService, jwtService: JwtService);
    messages(context: headersObj): Promise<MessageEntity[]>;
}
