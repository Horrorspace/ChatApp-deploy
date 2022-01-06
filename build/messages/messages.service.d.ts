import { Message } from './messages.model';
import { UsersService } from '../users/users.service';
import { MessageCreationAttrs } from './messages.types';
export declare class MessagesService {
    private readonly messageRepository;
    private readonly usersService;
    constructor(messageRepository: typeof Message, usersService: UsersService);
    createMessage(attrs: MessageCreationAttrs): Promise<Message | null>;
    getMessageById(id: number): Promise<Message | null>;
    getUserMessages(userId: number): Promise<Message[]>;
    setReadMessage(id: number): Promise<Message | null>;
    deleteMessage(id: number): Promise<boolean>;
}
