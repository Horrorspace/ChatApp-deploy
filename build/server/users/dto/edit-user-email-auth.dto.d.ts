import { editUserEmailAllAttrs } from '../users.types';
import { EditUserEmailDto } from '../dto/edit-user-email.dto';
export declare class EditUserEmailAuthDto extends EditUserEmailDto implements editUserEmailAllAttrs {
    readonly email: string;
    readonly password: string;
    constructor(email: string, password: string, id: number, newEmail: string);
}
