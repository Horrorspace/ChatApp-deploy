import { editUserEmailOpt } from '../users.types';
import { UserIdDto } from './user-id.dto';
export declare class EditUserEmailDto extends UserIdDto implements editUserEmailOpt {
    readonly newEmail: string;
    constructor(id: number, newEmail: string);
}
