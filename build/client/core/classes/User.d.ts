import { UserDto } from '@core/dto/user.dto';
import { IUser } from '@interfaces/IUser';
export declare class User extends UserDto {
    constructor({ id, online, avatarSrc, confirmed, username, email }: IUser);
    getUser(): IUser;
    getId(): number;
    setOnline(status: boolean): IUser;
    confirm(): IUser;
}
