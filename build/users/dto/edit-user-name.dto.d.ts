import { editUserNameOpt } from '../users.types';
import { UserIdDto } from './user-id.dto';
export declare class EditUserNameDto extends UserIdDto implements editUserNameOpt {
    readonly username: string;
    constructor(id: number, username: string);
}
