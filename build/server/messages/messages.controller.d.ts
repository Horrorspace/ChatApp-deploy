import { Request as Req } from 'express';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageIdDto } from './dto/message-id.dto';
import { MessageEntity } from './message.entity';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    private readonly notFoundUserException;
    private readonly notFoundMessageException;
    private processNewMessage;
    private processMessage;
    createMessage(req: Req, { toUserId, text }: CreateMessageDto): Promise<MessageEntity>;
    getMessageById({ id }: MessageIdDto): Promise<MessageEntity>;
    getUserMessages(req: Req): Promise<MessageEntity[]>;
    setReadMessage({ id }: MessageIdDto): Promise<MessageEntity>;
    deleteMessage({ id }: MessageIdDto): Promise<null>;
}
