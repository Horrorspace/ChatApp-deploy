import { IUser, IOnline } from '@interfaces/IUser';
export declare class UsersRepository {
    private users;
    constructor(users: IUser[]);
    getUsers(): IUser[];
    getUserByEmail(email: string): IUser | null;
    addUser(user: IUser): IUser[];
    setOnline({ id, online }: IOnline): IUser[];
    deleteUser(id: number): IUser[];
}
