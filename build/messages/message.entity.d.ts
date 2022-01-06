export declare class MessageEntity {
    id: number;
    date?: Date;
    text: string;
    readed?: boolean;
    fromUserId: number;
    toUserId: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<MessageEntity>);
}
