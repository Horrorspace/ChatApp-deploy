import { User } from './users.model';
import { UserCreationAttrs, editUserNameOpt, editUserEmailOpt, editUserPasswordOpt, editUserOnlineOpt, editUserAvatarOpt } from './users.types';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    createUser({ username, email, password }: UserCreationAttrs): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    checkUserId(id: number): Promise<boolean>;
    checkUserEmail(email: string): Promise<boolean>;
    editUserName({ id, username }: editUserNameOpt): Promise<User | null>;
    editUserEmail({ id, newEmail }: editUserEmailOpt): Promise<User | null>;
    editUserPassword({ id, newPassword }: editUserPasswordOpt): Promise<User | null>;
    editUserOnline({ id, online }: editUserOnlineOpt): Promise<User | null>;
    editUserAvatar({ id, avatarSrc }: editUserAvatarOpt): Promise<User | null>;
    confirmUser(id: number): Promise<User | null>;
    deleteUser(id: number): Promise<boolean>;
}
