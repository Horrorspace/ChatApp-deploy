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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const user_id_dto_1 = require("./dto/user-id.dto");
const user_email_dto_1 = require("./dto/user-email.dto");
const edit_user_name_dto_1 = require("./dto/edit-user-name.dto");
const edit_user_email_dto_1 = require("./dto/edit-user-email.dto");
const edit_user_email_auth_dto_1 = require("./dto/edit-user-email-auth.dto");
const edit_user_password_dto_1 = require("./dto/edit-user-password.dto");
const edit_user_password_auth_dto_1 = require("./dto/edit-user-password-auth.dto");
const edit_user_online_dto_1 = require("./dto/edit-user-online.dto");
const edit_user_avatar_dto_1 = require("./dto/edit-user-avatar.dto");
const user_entity_1 = require("./user.entity");
const logged_in_guard_1 = require("../auth/guard/logged-in.guard");
const local_guard_1 = require("../auth/guard/local.guard");
const check_id_guard_1 = require("./guard/check-id.guard");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
        this.notFoundException = new common_1.HttpException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: 'User not found'
        }, common_1.HttpStatus.NOT_FOUND);
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersService.getAllUsers();
            return users.map(user => {
                return new user_entity_1.UserEntity(user.get());
            });
        });
    }
    getUserById({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.getUserById(id);
            if (user) {
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                throw this.notFoundException;
            }
        });
    }
    getUserByEmail({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.getUserByEmail(email);
            if (user) {
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                throw this.notFoundException;
            }
        });
    }
    checkUserId({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.checkUserId(id);
        });
    }
    checkUserEmail({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.checkUserEmail(email);
        });
    }
    editUserName(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield this.usersService.checkUserId(options.id);
            if (isUserExist) {
                const user = yield this.usersService.editUserName(options);
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                throw this.notFoundException;
            }
        });
    }
    editUserEmail(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield this.usersService.checkUserId(options.id);
            if (isUserExist) {
                const user = yield this.usersService.editUserEmail(options);
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                throw this.notFoundException;
            }
        });
    }
    editUserPassword(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield this.usersService.checkUserId(options.id);
            if (isUserExist) {
                const user = yield this.usersService.editUserPassword(options);
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                throw this.notFoundException;
            }
        });
    }
    editUserOnline(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield this.usersService.checkUserId(options.id);
            if (isUserExist) {
                const user = yield this.usersService.editUserOnline(options);
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                throw this.notFoundException;
            }
        });
    }
    editUserAvatar(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield this.usersService.checkUserId(options.id);
            if (isUserExist) {
                const user = yield this.usersService.editUserAvatar(options);
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                throw this.notFoundException;
            }
        });
    }
    confirmUser({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield this.usersService.checkUserId(id);
            if (isUserExist) {
                const user = yield this.usersService.confirmUser(id);
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                throw this.notFoundException;
            }
        });
    }
    deleteUser(req, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield this.usersService.checkUserId(id);
            if (isUserExist) {
                req.logout();
                yield this.usersService.deleteUser(id);
                return null;
            }
            else {
                throw this.notFoundException;
            }
        });
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех пользователей' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Список пользователей получен',
        type: [user_entity_1.UserEntity]
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Получение пользователя по id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Пользователь получен',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Пользователь не найден' }),
    (0, common_1.Get)('byId'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_id_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Получение пользователя по email' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Пользователь получен',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Пользователь не найден' }),
    (0, common_1.Get)('byEmail'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_email_dto_1.UserEmailDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserByEmail", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Проверка существования пользователя по id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Ответ получен',
        type: Boolean
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, common_1.Get)('checkId'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_id_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "checkUserId", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Проверка существования пользователя по email' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Ответ получен',
        type: Boolean
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, common_1.Get)('checkEmail'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_email_dto_1.UserEmailDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "checkUserEmail", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Изменение имени пользователя' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Имя пользователя изменено',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Пользователь не найден' }),
    (0, common_1.Put)('editUserName'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseGuards)(check_id_guard_1.CheckIdGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_name_dto_1.EditUserNameDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "editUserName", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Изменение email пользователя' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Email пользователя изменен',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Пользователь не найден' }),
    (0, swagger_1.ApiBody)({ type: edit_user_email_auth_dto_1.EditUserEmailAuthDto }),
    (0, common_1.Put)('editUserEmail'),
    (0, common_1.UseGuards)(local_guard_1.LocalAuthGuard),
    (0, common_1.UseGuards)(check_id_guard_1.CheckIdGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_email_dto_1.EditUserEmailDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "editUserEmail", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Изменение пароля пользователя' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Пароль пользователя изменен',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Пользователь не найден' }),
    (0, swagger_1.ApiBody)({ type: edit_user_password_auth_dto_1.EditUserPasswordAuthDto }),
    (0, common_1.Put)('editUserPassword'),
    (0, common_1.UseGuards)(local_guard_1.LocalAuthGuard),
    (0, common_1.UseGuards)(check_id_guard_1.CheckIdGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_password_dto_1.EditUserPasswordDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "editUserPassword", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Изменение статуса пользователя' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Статус пользователя изменен',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Пользователь не найден' }),
    (0, common_1.Put)('editUserOnline'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseGuards)(check_id_guard_1.CheckIdGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_online_dto_1.EditUserOnlineDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "editUserOnline", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Изменение аватара пользователя' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Аватар пользователя изменен',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Пользователь не найден' }),
    (0, common_1.Put)('editUserAvatar'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseGuards)(check_id_guard_1.CheckIdGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_avatar_dto_1.EditUserAvatarDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "editUserAvatar", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Подтверждение email пользователя' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Email пользователя подтвержден',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Пользователь не найден' }),
    (0, common_1.Put)('confirm'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseGuards)(check_id_guard_1.CheckIdGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_id_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "confirmUser", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiOperation)({ summary: 'Удаление пользователя' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Пользователь удален',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Пользователь не найден' }),
    (0, common_1.Delete)('byId'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseGuards)(check_id_guard_1.CheckIdGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_id_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.Controller)('api/users'),
    __param(0, (0, common_1.Inject)(users_service_1.UsersService)),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
