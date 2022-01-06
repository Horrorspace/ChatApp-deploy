export declare class Saga {
    static readonly saga: import("redux-saga").SagaMiddleware<object>;
    static rootSaga(): Generator<import("redux-saga/effects").ForkEffect<void>, void, unknown>;
    static start(): void;
}
