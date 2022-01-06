import { AbstractGql } from '@api/gql/abstract.gql';
import { IUser } from '@interfaces/IUser';
interface IUsersRes {
    users: IUser[];
}
interface IUsersByIdRes {
    usersById: IUser[];
}
export declare class UsersGql extends AbstractGql {
    private static getAllUsersQuery;
    private static getUsersQuery;
    static getAllUsers(): Promise<IUsersRes>;
    static getUsers(ids: number[]): Promise<IUsersByIdRes>;
}
export {};
