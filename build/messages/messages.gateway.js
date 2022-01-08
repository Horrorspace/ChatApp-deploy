"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const jwt_1 = require("@nestjs/jwt");
const socket_io_1 = require("socket.io");
const logged_in_ws_guard_1 = require("../auth/guard/logged-in-ws.guard");
const ws_client_dto_1 = require("./dto/ws-client.dto");
const create_message_dto_1 = require("./dto/create-message.dto");
const messages_service_1 = require("../messages/messages.service");
let MessagesGateway = class MessagesGateway {
    constructor(jwtService, messagesService) {
        this.jwtService = jwtService;
        this.messagesService = messagesService;
        this.clients = [];
    }
    getIdBySocket(client) {
        const filteredArr = this.clients.filter(wsClient => wsClient.wsId === client.id);
        if (filteredArr.length > 0) {
            return filteredArr[0].id;
        }
        else {
            return null;
        }
    }
    getSocketId(id) {
        const filteredArr = this.clients.filter(wsClient => wsClient.id === id);
        if (filteredArr.length > 0) {
            return filteredArr[0].wsId;
        }
        else {
            return null;
        }
    }
    handleMessage({ text, toUserId }, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.getIdBySocket(client);
            if (id) {
                const newMessage = new create_message_dto_1.CreateMessageDto(id, toUserId, text);
                yield this.messagesService.createMessage(newMessage);
                const messages = yield this.messagesService.getUserMessages(toUserId);
                const index = messages.length - 1;
                const message = messages
                    .sort((a, b) => a.date.getTime() - b.date.getTime())[index];
                const fromSocket = this.getSocketId(id);
                const toSocket = this.getSocketId(toUserId);
                fromSocket ? this.server.to(fromSocket).emit('message', message) : null;
                toSocket ? this.server.to(toSocket).emit('message', message) : null;
            }
            console.log(text, toUserId);
        });
    }
    handleAuth({ access_token }, client) {
        const { sub } = this.jwtService.decode(access_token);
        const wsClient = new ws_client_dto_1.WsClientDto(client.id, sub);
        if (this.clients.filter(client => client.wsId === wsClient.wsId).length === 0) {
            this.clients.push(wsClient);
            console.log(wsClient);
            console.log(this.clients);
        }
        else {
            this.clients = this.clients.filter(client => client.wsId === wsClient.wsId);
            this.clients.push(wsClient);
        }
    }
    handleConnection(client) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Client connected: ${client.id}`);
            this.server.to(client.id).emit('test', 'testing');
        });
    }
    handleDisconnect(client) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Client disconnected: ${client.id}`);
            this.clients = this.clients.filter(wsClient => wsClient.wsId !== client.id);
            console.log(this.clients);
        });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], MessagesGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], MessagesGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('auth'),
    (0, common_1.UseGuards)(logged_in_ws_guard_1.LoggedInWsGuard),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], MessagesGateway.prototype, "handleAuth", null);
MessagesGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __param(0, (0, common_1.Inject)(jwt_1.JwtService)),
    __param(1, (0, common_1.Inject)(messages_service_1.MessagesService)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        messages_service_1.MessagesService])
], MessagesGateway);
exports.MessagesGateway = MessagesGateway;
