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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_service_1 = require("../../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    validateUser({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.getUserByEmail(email);
            if (!user) {
                return null;
            }
            const isMatch = yield bcrypt_1.default.compare(password, user.password);
            if (isMatch) {
                return user.get();
            }
            else {
                return null;
            }
        });
    }
    registerUser(creationAttrs) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.createUser(creationAttrs);
            return user;
        });
    }
    validateUserbyJwt({ sub }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sub) {
                const user = yield this.usersService.getUserById(sub);
                return user ? user.get() : null;
            }
            else {
                return null;
            }
        });
    }
    getToken(userAttrs) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = { username: userAttrs.username, sub: userAttrs.id };
            const token = this.jwtService.sign(payload);
            return {
                access_token: token,
            };
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.getUserById(id);
            return user;
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(users_service_1.UsersService)),
    __param(1, (0, common_1.Inject)(jwt_1.JwtService)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
