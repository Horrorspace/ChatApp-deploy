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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const local_guard_1 = require("./guard/local.guard");
const logged_in_guard_1 = require("./guard/logged-in.guard");
const jwt_guard_1 = require("./guard/jwt.guard");
const unauthorized_guard_1 = require("./guard/unauthorized.guard");
const login_dto_1 = require("./dto/login.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const token_dto_1 = require("./dto/token.dto");
const auth_service_1 = require("./provider/auth.service");
const user_entity_1 = require("../users/user.entity");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_entity_1.UserEntity(req.user);
        });
    }
    logout(req) {
        return __awaiter(this, void 0, void 0, function* () {
            req.logout();
            return 'You have been logouted';
        });
    }
    register(creationAttrs) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.registerUser(creationAttrs);
            if (user) {
                return new user_entity_1.UserEntity(user.get());
            }
            else {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.CONFLICT,
                    error: 'User with this email already exist'
                }, common_1.HttpStatus.CONFLICT);
            }
        });
    }
    getToken(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAttrs = req.user;
            const res = yield this.authService.getToken(userAttrs);
            return res;
        });
    }
    getUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAttrs = req.user;
            const id = userAttrs.id;
            if (id) {
                const user = yield this.authService.getUser(id);
                return user ? new user_entity_1.UserEntity(user.get()) : null;
            }
            else {
                return null;
            }
        });
    }
    jwtAuthTest(req) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.user);
            return 'test';
        });
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Вход в аккаунт' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Вход в аккаунт выполнен успешно',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Вход в аккаунт невозможен, пользователь с таким email и паролем не существует' }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(local_guard_1.LocalAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Выход из аккаунта' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Выход из аккаунта выполнен успешно',
        type: String
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Регистрация пользователя' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Регистрация выполнена успешно',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Вход уже выполнен под другим email' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Пользователь с таким email уже существует' }),
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseGuards)(unauthorized_guard_1.UnauthorizedGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Получение JWT-токена' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Токен получен',
        type: token_dto_1.TokenDto
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен' }),
    (0, common_1.Get)('getToken'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getToken", null);
__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Получение текущего пользователя' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Пользователь получен',
        type: user_entity_1.UserEntity
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Доступ запрещен по причине отсутствующей авторизации' }),
    (0, common_1.Get)('getUser'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('jwtTest'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "jwtAuthTest", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __param(0, (0, common_1.Inject)(auth_service_1.AuthService)),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
