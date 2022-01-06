export declare abstract class AbstractSocket {
    protected static readonly protocol: string;
    protected static readonly baseUrl: string;
    protected static token: string;
    protected static updateToken(): string;
    protected static socket: import("socket.io-client").Socket<import("@socket.io/component-emitter").DefaultEventsMap, import("@socket.io/component-emitter").DefaultEventsMap>;
}
