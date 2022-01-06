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
exports.MessagesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const messages_service_1 = require("./messages.service");
const message_entity_1 = require("./message.entity");
const graphql_auth_guard_1 = require("../graphql/graphql-auth.guard");
const jwt_1 = require("@nestjs/jwt");
let MessagesResolver = class MessagesResolver {
    constructor(messagesService, jwtService) {
        this.messagesService = messagesService;
        this.jwtService = jwtService;
    }
    messages(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const authHeader = context.headers.authorization;
            if (authHeader) {
                const { sub } = this.jwtService.decode(authHeader.replace('Bearer ', ''));
                const messages = yield this.messagesService.getUserMessages(sub);
                return messages.map(message => {
                    return new message_entity_1.MessageEntity(message.get());
                });
            }
            else {
                return [];
            }
        });
    }
};
__decorate([
    (0, graphql_1.Query)(),
    (0, common_1.UseGuards)(graphql_auth_guard_1.GqlAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesResolver.prototype, "messages", null);
MessagesResolver = __decorate([
    (0, graphql_1.Resolver)('Message'),
    __param(0, (0, common_1.Inject)(messages_service_1.MessagesService)),
    __param(1, (0, common_1.Inject)(jwt_1.JwtService)),
    __metadata("design:paramtypes", [messages_service_1.MessagesService,
        jwt_1.JwtService])
], MessagesResolver);
exports.MessagesResolver = MessagesResolver;
