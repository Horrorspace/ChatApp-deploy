export interface ILogin {
    email: string;
    password: string;
}
export interface IRegister extends ILogin {
    username: string;
}
export interface IToken {
    access_token: string;
}
