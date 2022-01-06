import { PassportSerializer } from '@nestjs/passport';
import { User } from '../../users/users.model';
import { UsersService } from '../../users/users.service';
export declare class LocalSerializer extends PassportSerializer {
    private readonly usersService;
    constructor(usersService: UsersService);
    serializeUser(user: User, done: CallableFunction): void;
    deserializeUser(id: number, done: CallableFunction): Promise<any>;
}
