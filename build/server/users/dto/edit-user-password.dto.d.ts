import { editUserPasswordOpt } from '../users.types';
import { UserIdDto } from './user-id.dto';
export declare class EditUserPasswordDto extends UserIdDto implements editUserPasswordOpt {
    readonly newPassword: string;
    constructor(id: number, newPassword: string);
}
