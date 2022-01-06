import { editUserAvatarOpt } from '../users.types';
import { UserIdDto } from './user-id.dto';
export declare class EditUserAvatarDto extends UserIdDto implements editUserAvatarOpt {
    readonly avatarSrc: string;
    constructor(id: number, avatarSrc: string);
}
