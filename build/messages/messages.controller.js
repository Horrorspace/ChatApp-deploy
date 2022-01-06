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
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const create_message_dto_1 = require("./dto/create-message.dto");
const message_id_dto_1 = require("./dto/message-id.dto");
const logged_in_guard_1 = require("../auth/guard/logged-in.guard");
const message_id_check_guard_1 = require("./guard/message-id-check.guard");
const message_entity_1 = require("./message.entity");
const swagger_1 = require("@nestjs/swagger");
let MessagesController = class MessagesController {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.notFoundUserException = new common_1.HttpException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: 'Recipient user id does not exist'
        }, common_1.HttpStatus.NOT_FOUND);
        this.notFoundMessageException = new common_1.HttpException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: 'Message not found'
        }, common_1.HttpStatus.NOT_FOUND);
    }
    processNewMessage(message) {
        if (message) {
            return new message_entity_1.MessageEntity(message.get());
        }
        else {
            throw this.notFoundUserException;
        }
    }
    processMessage(message) {
        if (message) {
            return new message_entity_1.MessageEntity(message.get());
        }
        else {
            throw this.notFoundMessageException;
        }
    }
    createMessage(req, { toUserId, text }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const fromUserId = user.id;
            const attrs = new create_message_dto_1.CreateMessageDto(fromUserId, toUserId, text);
            const message = yield this.messagesService.createMessage(attrs);
            return this.processNewMessage(message);
        });
    }
    getMessageById({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.messagesService.getMessageById(id);
            return this.processMessage(message);
        });
    }
    getUserMessages(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const userId = user.id;
            const messages = yield this.messagesService.getUserMessages(userId);
            return messages.map(message => {
                return new message_entity_1.MessageEntity(message.get());
            });
        });
    }
    setReadMessage({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.messagesService.setReadMessage(id);
            return this.processMessage(message);
        });
    }
    deleteMessage({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDelete = yield this.messagesService.deleteMessage(id);
            if (isDelete) {
                return null;
            }
            else {
                throw this.notFoundMessageException;
            }
        });
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Messages'),
    (0, swagger_1.ApiOperation)({ summary: 'Создание сообщения' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Сообщение создано',
        type: message_entity_1.MessageEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Получатель не найден' }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "createMessage", null);
__decorate([
    (0, swagger_1.ApiTags)('Messages'),
    (0, swagger_1.ApiOperation)({ summary: 'Получение сообщения по идентификатору' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Сообщение получено',
        type: message_entity_1.MessageEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Сообщение не найдено' }),
    (0, common_1.Get)('byId'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseGuards)(message_id_check_guard_1.MessageIdCheckGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_id_dto_1.MessageIdDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getMessageById", null);
__decorate([
    (0, swagger_1.ApiTags)('Messages'),
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех сообщений пользователя' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Сообщения получены',
        type: [message_entity_1.MessageEntity]
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getUserMessages", null);
__decorate([
    (0, swagger_1.ApiTags)('Messages'),
    (0, swagger_1.ApiOperation)({ summary: 'Установка сообщению статуса "прочтено"' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Статус установлен',
        type: message_entity_1.MessageEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Сообщение не найдено' }),
    (0, common_1.Put)('byId'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseGuards)(message_id_check_guard_1.MessageIdCheckGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_id_dto_1.MessageIdDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "setReadMessage", null);
__decorate([
    (0, swagger_1.ApiTags)('Messages'),
    (0, swagger_1.ApiOperation)({ summary: 'Удаление сообщения' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Сообщение удалено'
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Сообщение не найдено' }),
    (0, common_1.Delete)('byId'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseGuards)(message_id_check_guard_1.MessageIdCheckGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_id_dto_1.MessageIdDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "deleteMessage", null);
MessagesController = __decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.Controller)('/api/messages'),
    __param(0, (0, common_1.Inject)(messages_service_1.MessagesService)),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesController);
exports.MessagesController = MessagesController;
