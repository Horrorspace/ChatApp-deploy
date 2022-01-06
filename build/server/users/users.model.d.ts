import { Model } from 'sequelize-typescript';
import { UserAttrs, UserCreationAttrs } from './users.types';
export declare class User extends Model<UserAttrs, UserCreationAttrs> {
    id?: number;
    username: string;
    email: string;
    password: string;
    online?: boolean;
    avatarSrc?: string;
    confirmed?: boolean;
}
