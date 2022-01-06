import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';
import { MessageCreationAttrsRaw } from './messages.types';
import { AccessToken } from '../auth/auth.types';
import { MessagesService } from '../messages/messages.service';
export declare class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly jwtService;
    private readonly messagesService;
    constructor(jwtService: JwtService, messagesService: MessagesService);
    private readonly server;
    private clients;
    private getIdBySocket;
    private getSocketId;
    handleMessage({ text, toUserId }: MessageCreationAttrsRaw, client: Socket): Promise<void>;
    handleAuth({ access_token }: AccessToken, client: Socket): void;
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
}
