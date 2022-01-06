import { AxiosResponse, AxiosRequestHeaders } from 'axios';
import { Observable } from 'rxjs';
import { reqType } from '@api/REST/req-type.enum';
export declare abstract class AbstractREST {
    protected static headers: AxiosRequestHeaders;
    protected static readonly protocol: string;
    protected static readonly baseUrl: string;
    protected static readonly successfulStatuses: number[];
    protected static isSuccessful(status: number): boolean;
    protected static request<T, R>(type: reqType, url: string, body: T): Promise<AxiosResponse<R>>;
    protected static observableRequest<T, R>(type: reqType, url: string, body: T): Observable<AxiosResponse<R>>;
    protected static makeRequest<R, T>(type: reqType, url: string, body: T): Promise<R>;
}
