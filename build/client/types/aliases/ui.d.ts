import { ReactElement } from 'react';
export declare type ElementCreator<T> = (Props: T) => ReactElement;
export declare type inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
export declare type btnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => void;
export declare type clickHandler<T = HTMLElement> = (e: React.MouseEvent<HTMLElement>) => void;
export declare type clickHandlerVoid = () => void;
