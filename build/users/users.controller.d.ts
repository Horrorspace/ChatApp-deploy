import { Request as Req } from 'express';
import { UsersService } from './users.service';
import { UserIdDto } from './dto/user-id.dto';
import { UserEmailDto } from './dto/user-email.dto';
import { EditUserNameDto } from './dto/edit-user-name.dto';
import { EditUserEmailDto } from './dto/edit-user-email.dto';
import { EditUserPasswordDto } from './dto/edit-user-password.dto';
import { EditUserOnlineDto } from './dto/edit-user-online.dto';
import { EditUserAvatarDto } from './dto/edit-user-avatar.dto';
import { UserEntity } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    private readonly notFoundException;
    getAllUsers(): Promise<UserEntity[]>;
    getUserById({ id }: UserIdDto): Promise<UserEntity>;
    getUserByEmail({ email }: UserEmailDto): Promise<UserEntity>;
    checkUserId({ id }: UserIdDto): Promise<boolean>;
    checkUserEmail({ email }: UserEmailDto): Promise<boolean>;
    editUserName(options: EditUserNameDto): Promise<UserEntity>;
    editUserEmail(options: EditUserEmailDto): Promise<UserEntity>;
    editUserPassword(options: EditUserPasswordDto): Promise<UserEntity>;
    editUserOnline(options: EditUserOnlineDto): Promise<UserEntity>;
    editUserAvatar(options: EditUserAvatarDto): Promise<UserEntity>;
    confirmUser({ id }: UserIdDto): Promise<UserEntity>;
    deleteUser(req: Req, { id }: UserIdDto): Promise<null>;
}
