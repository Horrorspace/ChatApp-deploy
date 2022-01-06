import { ApolloClient, DefaultOptions, ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';
declare type gqlQuery<T, R> = (arg: T) => Promise<ApolloQueryResult<R>>;
export declare abstract class AbstractGql {
    protected static readonly protocol: string;
    protected static readonly baseUrl: string;
    protected static readonly httpLink: import("@apollo/client").ApolloLink;
    protected static readonly authLink: import("@apollo/client").ApolloLink;
    protected static readonly defaultOptions: DefaultOptions;
    protected static readonly client: ApolloClient<import("@apollo/client").NormalizedCacheObject>;
    protected static isSuccessful<T>(apolloRes: ApolloQueryResult<T>): boolean;
    protected static observableGql<T, R>(query: gqlQuery<T, R>, arg: T): Observable<ApolloQueryResult<R>>;
    protected static makeRequest<T, R>(query: gqlQuery<T, R>, arg: T): Promise<R>;
}
export {};
