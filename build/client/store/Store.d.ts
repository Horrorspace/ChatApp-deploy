export declare class Store {
    private static readonly reducer;
    static readonly value: import("@reduxjs/toolkit").EnhancedStore<any, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<import("redux").Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>> | import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, undefined> | import("redux-saga").SagaMiddleware<object>>>;
    static start(): void;
}
