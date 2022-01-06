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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_model_1 = require("./users.model");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    createUser({ username, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.checkUserEmail(email);
            if (!exist) {
                const hashedPassword = yield bcrypt_1.default.hash(password, 15);
                const userAttrs = {
                    username,
                    email,
                    password: hashedPassword
                };
                const user = yield this.userRepository.create(userAttrs);
                return user;
            }
            else {
                return null;
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.findAll();
            return users;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id } });
            return user;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { email } });
            return user;
        });
    }
    checkUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUserById(id);
            return Boolean(user);
        });
    }
    checkUserEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUserByEmail(email);
            return Boolean(user);
        });
    }
    editUserName({ id, username }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isIdExist = yield this.checkUserId(id);
            if (isIdExist) {
                yield this.userRepository.update({ username }, { where: { id } });
                return yield this.getUserById(id);
            }
            else {
                return null;
            }
        });
    }
    editUserEmail({ id, newEmail }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isIdExist = yield this.checkUserId(id);
            if (isIdExist) {
                yield this.userRepository.update({ email: newEmail }, { where: { id } });
                return yield this.getUserById(id);
            }
            else {
                return null;
            }
        });
    }
    editUserPassword({ id, newPassword }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isIdExist = yield this.checkUserId(id);
            if (isIdExist) {
                yield this.userRepository.update({ password: newPassword }, { where: { id } });
                return yield this.getUserById(id);
            }
            else {
                return null;
            }
        });
    }
    editUserOnline({ id, online }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isIdExist = yield this.checkUserId(id);
            if (isIdExist) {
                yield this.userRepository.update({ online }, { where: { id } });
                return yield this.getUserById(id);
            }
            else {
                return null;
            }
        });
    }
    editUserAvatar({ id, avatarSrc }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isIdExist = yield this.checkUserId(id);
            if (isIdExist) {
                yield this.userRepository.update({ avatarSrc }, { where: { id } });
                return yield this.getUserById(id);
            }
            else {
                return null;
            }
        });
    }
    confirmUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isIdExist = yield this.checkUserId(id);
            if (isIdExist) {
                yield this.userRepository.update({ confirmed: true }, { where: { id } });
                return yield this.getUserById(id);
            }
            else {
                return null;
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isIdExist = yield this.checkUserId(id);
            if (isIdExist) {
                yield this.userRepository.destroy({ where: { id } });
                return true;
            }
            else {
                return false;
            }
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
