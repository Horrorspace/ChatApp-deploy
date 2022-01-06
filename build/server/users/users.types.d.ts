import { LoginAttrs } from '../auth/auth.types';
export interface UserId {
    id: number;
}
export interface UserIds {
    ids: number[];
}
export interface UserEmail {
    email: string;
}
export interface UserCreationAttrs {
    username: string;
    email: string;
    password: string;
}
export interface UserAttrs extends UserCreationAttrs, UserId {
    online: boolean;
    avatarSrc: string;
    confirmed: boolean;
}
export interface editUserNameOpt extends UserId {
    username: string;
}
export interface editUserEmailOpt extends UserId {
    newEmail: string;
}
export interface editUserPasswordOpt extends UserId {
    newPassword: string;
}
export interface editUserEmailAllAttrs extends LoginAttrs, editUserEmailOpt {
}
export interface editUserPasswordAllAttrs extends LoginAttrs, editUserPasswordOpt {
}
export interface editUserOnlineOpt extends UserId {
    online: boolean;
}
export interface editUserAvatarOpt extends UserId {
    avatarSrc: string;
}
export interface UserResponse {
    id: number;
    online: boolean;
    avatarSrc: string;
    confirmed: boolean;
    username: string;
    email: string;
}
