export declare class AuthSaga {
    private static loginSaga;
    private static logoutSaga;
    private static tokenSaga;
    private static userLoadingSaga;
    private static tokenLoadingSaga;
    static sagaWatcher(): Generator<import("redux-saga/effects").CallEffect<void> | import("redux-saga/effects").ForkEffect<never>, void, unknown>;
}
