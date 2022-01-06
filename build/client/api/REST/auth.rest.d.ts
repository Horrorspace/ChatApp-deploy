import { AbstractREST } from '@api/REST/abstract.rest';
import { reqType } from '@api/REST/req-type.enum';
import { ILogin, IRegister } from '@interfaces/IAuth';
import { IUser } from '@interfaces/IUser';
export declare class AuthREST extends AbstractREST {
    private static readonly basePath;
    private static getUrl;
    protected static makeRequest<R, T>(type: reqType, url: string, body: T): Promise<R>;
    static login(login: ILogin): Promise<IUser>;
    static logout(): Promise<string>;
    static register(registerData: IRegister): Promise<IUser>;
    static getToken(): Promise<string>;
    static getUser(): Promise<IUser>;
}
