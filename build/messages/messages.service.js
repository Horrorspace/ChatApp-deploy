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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const messages_model_1 = require("./messages.model");
const users_service_1 = require("../users/users.service");
const sequelize_2 = require("sequelize");
let MessagesService = class MessagesService {
    constructor(messageRepository, usersService) {
        this.messageRepository = messageRepository;
        this.usersService = usersService;
    }
    createMessage(attrs) {
        return __awaiter(this, void 0, void 0, function* () {
            const isFromIdExist = yield this.usersService.checkUserId(attrs.fromUserId);
            const isToIdExist = yield this.usersService.checkUserId(attrs.toUserId);
            if (isFromIdExist && isToIdExist) {
                const message = yield this.messageRepository.create(attrs);
                return message;
            }
            else {
                return null;
            }
        });
    }
    getMessageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.messageRepository.findOne({ where: { id } });
            return message;
        });
    }
    getUserMessages(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const messages = yield this.messageRepository.findAll({
                where: {
                    [sequelize_2.Op.or]: [
                        { fromUserId: userId },
                        { toUserId: userId }
                    ]
                },
                order: (0, sequelize_2.col)('date')
            });
            return messages;
        });
    }
    setReadMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isIdExist = yield this.usersService.checkUserId(id);
            if (isIdExist) {
                yield this.messageRepository.update({ readed: true }, { where: { id } });
                const message = yield this.getMessageById(id);
                return message;
            }
            else {
                return null;
            }
        });
    }
    deleteMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isIdExist = yield this.usersService.checkUserId(id);
            if (isIdExist) {
                yield this.messageRepository.destroy({ where: { id } });
                return true;
            }
            else {
                return false;
            }
        });
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(messages_model_1.Message)),
    __param(1, (0, common_1.Inject)(users_service_1.UsersService)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService])
], MessagesService);
exports.MessagesService = MessagesService;
