import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
export declare class Middleware {
    private static middlewareList;
    static middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) => import("@reduxjs/toolkit").MiddlewareArray<import("redux").Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>> | import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, undefined> | import("redux-saga").SagaMiddleware<object>>;
    static start(): void;
}
