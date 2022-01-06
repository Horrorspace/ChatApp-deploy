import { Model } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { MessageCreationAttrs, MessageAttrs } from './messages.types';
export declare class Message extends Model<MessageAttrs, MessageCreationAttrs> {
    id: number;
    date?: Date;
    text: string;
    readed?: boolean;
    fromUserId: number;
    toUserId: number;
    user: User;
}
