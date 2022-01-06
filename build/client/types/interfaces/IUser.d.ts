export interface IOnline {
    id: number;
    online: boolean;
}
export interface IUser extends IOnline {
    avatarSrc: string;
    confirmed: boolean;
    username: string;
    email: string;
}
