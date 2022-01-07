import { lastOnline } from '@aliases/Message';
import { IMessage } from '@interfaces/IMessage';
import { InfoFields } from '@aliases/Profile';
import { inputChangeHandler, btnClickHandler, clickHandler, clickHandlerVoid } from '@aliases/ui';
export interface IDateMessageProps {
    date: Date;
}
export interface IStatusProps {
    fromUser: boolean;
    readed: boolean;
}
export interface IMessageProps {
    userId: number;
    fromUserId: number;
    text: string;
    date: Date;
    readed: boolean;
}
export interface IMessagesProps {
    messages: IMessage[];
    userId: number;
}
export interface IMessageEditorProps {
    text: string;
    onSendClicK: btnClickHandler;
    onTextChange: inputChangeHandler;
}
export interface abstractUser {
    username: string;
    avatarSrc: string;
    online: boolean;
}
export interface IContactProps extends abstractUser {
    lastOnline: lastOnline;
}
export interface IUserAvatarProps {
    userId: number;
    lastMessageFromUserId: number;
    userAvatarSrc: string;
}
export interface IContactCardProps extends IUserAvatarProps, abstractUser {
    lastMessage: string;
    timeOfLastMessage: Date;
    onClick: clickHandler;
}
export interface IContactCardsProps {
    cards: IContactCardProps[];
}
export interface IInfoFieldProps {
    title: string;
    value: string;
}
export interface IInfoListProps {
    infoFields: InfoFields;
}
export interface IInputFieldProps {
    title: string;
    placeholder: string;
    onChange: inputChangeHandler;
    value: string;
}
export interface IPassFieldProps extends IInputFieldProps {
    forgotPassTitle?: string;
}
export interface ISignInProps {
    login: string;
    password: string;
    onLoginChange: inputChangeHandler;
    onPasswordChange: inputChangeHandler;
    onSignInClick: btnClickHandler;
}
export interface ISignUpProps {
    username: string;
    email: string;
    password: string;
    onUsernameChange: inputChangeHandler;
    onEmailChange: inputChangeHandler;
    onPasswordChange: inputChangeHandler;
    onSignUpClick: btnClickHandler;
}
export interface ISearchFieldProps {
    addModalShow: boolean;
    settingsModalShow: boolean;
    userInput: string;
    onSettingsBtnClick: btnClickHandler;
    onMyProfileClick: clickHandlerVoid;
    onLogOutClick: clickHandlerVoid;
    onAddUserBtnClick: btnClickHandler;
    onAddUserCancel: clickHandler;
    onAddUserOk: btnClickHandler;
    onUserInputChange: inputChangeHandler;
}
export interface IProfileMenuProps {
    onBackClick: clickHandlerVoid;
}
export interface IAvatarProps {
    src: string;
}
export interface IProfileProps extends IAvatarProps, IInfoListProps {
}
export interface IGoogleAuthProps {
    aMember: boolean;
}
export interface IAMemberProps {
    aMember: boolean;
    onBtnClick: btnClickHandler;
}
