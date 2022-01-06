import { MessageCreationAttrs } from '../messages.types';
export declare class CreateMessageDto implements MessageCreationAttrs {
    readonly fromUserId: number;
    readonly toUserId: number;
    readonly text: string;
    constructor(fromUserId: number, toUserId: number, text: string);
}
