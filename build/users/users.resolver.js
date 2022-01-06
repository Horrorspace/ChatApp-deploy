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
exports.UsersResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const users_service_1 = require("./users.service");
const user_id_dto_1 = require("./dto/user-id.dto");
const edit_user_name_dto_1 = require("./dto/edit-user-name.dto");
const edit_user_email_dto_1 = require("./dto/edit-user-email.dto");
const user_ids_dto_1 = require("./dto/user-ids.dto");
const edit_user_password_dto_1 = require("./dto/edit-user-password.dto");
const edit_user_online_dto_1 = require("./dto/edit-user-online.dto");
const edit_user_avatar_dto_1 = require("./dto/edit-user-avatar.dto");
const user_entity_1 = require("./user.entity");
const graphql_auth_guard_1 = require("../graphql/graphql-auth.guard");
let UsersResolver = class UsersResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    users() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersService.getAllUsers();
            return users.map(user => {
                return new user_entity_1.UserEntity(user.get());
            });
        });
    }
    usersById({ ids }) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersService.getAllUsers();
            const result = users
                .filter(user => ids.some(id => user.id === id))
                .map(user => {
                return new user_entity_1.UserEntity(user.get());
            });
            return result;
        });
    }
    user({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.getUserById(id);
            if (user) {
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                return null;
            }
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
                return null;
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
                return null;
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
                return null;
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
                return null;
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
                return null;
            }
        });
    }
    editUserConfirm({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield this.usersService.checkUserId(id);
            if (isUserExist) {
                const user = yield this.usersService.confirmUser(id);
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                return null;
            }
        });
    }
};
__decorate([
    (0, graphql_1.Query)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "users", null);
__decorate([
    (0, graphql_1.Query)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, graphql_1.Args)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_ids_dto_1.UserIdsDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "usersById", null);
__decorate([
    (0, graphql_1.Query)(),
    (0, common_1.UseGuards)(graphql_auth_guard_1.GqlAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, graphql_1.Args)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_id_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "user", null);
__decorate([
    (0, graphql_1.Mutation)(),
    (0, common_1.UseGuards)(graphql_auth_guard_1.GqlAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, graphql_1.Args)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_name_dto_1.EditUserNameDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "editUserName", null);
__decorate([
    (0, graphql_1.Mutation)(),
    (0, common_1.UseGuards)(graphql_auth_guard_1.GqlAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, graphql_1.Args)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_email_dto_1.EditUserEmailDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "editUserEmail", null);
__decorate([
    (0, graphql_1.Mutation)(),
    (0, common_1.UseGuards)(graphql_auth_guard_1.GqlAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, graphql_1.Args)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_password_dto_1.EditUserPasswordDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "editUserPassword", null);
__decorate([
    (0, graphql_1.Mutation)(),
    (0, common_1.UseGuards)(graphql_auth_guard_1.GqlAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, graphql_1.Args)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_online_dto_1.EditUserOnlineDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "editUserOnline", null);
__decorate([
    (0, graphql_1.Mutation)(),
    (0, common_1.UseGuards)(graphql_auth_guard_1.GqlAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, graphql_1.Args)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_avatar_dto_1.EditUserAvatarDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "editUserAvatar", null);
__decorate([
    (0, graphql_1.Mutation)(),
    (0, common_1.UseGuards)(graphql_auth_guard_1.GqlAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, graphql_1.Args)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_id_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "editUserConfirm", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)('User'),
    __param(0, (0, common_1.Inject)(users_service_1.UsersService)),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
