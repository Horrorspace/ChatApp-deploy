import { editUserOnlineOpt } from '../users.types';
import { UserIdDto } from './user-id.dto';
export declare class EditUserOnlineDto extends UserIdDto implements editUserOnlineOpt {
    readonly online: boolean;
    constructor(id: number, online: boolean);
}
