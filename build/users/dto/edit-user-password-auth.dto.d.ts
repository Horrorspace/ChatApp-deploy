import { editUserPasswordAllAttrs } from '../users.types';
import { EditUserPasswordDto } from '../dto/edit-user-password.dto';
export declare class EditUserPasswordAuthDto extends EditUserPasswordDto implements editUserPasswordAllAttrs {
    readonly email: string;
    readonly password: string;
    constructor(email: string, password: string, id: number, newPassword: string);
}
