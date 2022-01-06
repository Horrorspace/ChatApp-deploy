export declare class UserEntity {
    id: number;
    online: boolean;
    avatarSrc: string;
    confirmed: boolean;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<UserEntity>);
}
