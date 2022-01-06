import { IMessage } from '@interfaces/IMessage';
export declare class MessagesReducer {
    private static readonly initialState;
    private static buildReducer;
    static reducer: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<IMessage[]>;
}
