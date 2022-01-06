import { UsersService } from './users.service';
import { UserIdDto } from './dto/user-id.dto';
import { EditUserNameDto } from './dto/edit-user-name.dto';
import { EditUserEmailDto } from './dto/edit-user-email.dto';
import { UserIdsDto } from './dto/user-ids.dto';
import { EditUserPasswordDto } from './dto/edit-user-password.dto';
import { EditUserOnlineDto } from './dto/edit-user-online.dto';
import { EditUserAvatarDto } from './dto/edit-user-avatar.dto';
import { UserEntity } from './user.entity';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    users(): Promise<UserEntity[]>;
    usersById({ ids }: UserIdsDto): Promise<UserEntity[]>;
    user({ id }: UserIdDto): Promise<UserEntity | null>;
    editUserName(options: EditUserNameDto): Promise<UserEntity | null>;
    editUserEmail(options: EditUserEmailDto): Promise<UserEntity | null>;
    editUserPassword(options: EditUserPasswordDto): Promise<UserEntity | null>;
    editUserOnline(options: EditUserOnlineDto): Promise<UserEntity | null>;
    editUserAvatar(options: EditUserAvatarDto): Promise<UserEntity | null>;
    editUserConfirm({ id }: UserIdDto): Promise<UserEntity | null>;
}
