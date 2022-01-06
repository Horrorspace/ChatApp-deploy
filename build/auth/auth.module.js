"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./provider/auth.service");
const users_module_1 = require("../users/users.module");
const auth_controller_1 = require("./auth.controller");
const local_strategy_1 = require("./strategy/local.strategy");
const basic_strategy_1 = require("./strategy/basic.strategy");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const local_guard_1 = require("./guard/local.guard");
const basic_guard_1 = require("./guard/basic.guard");
const jwt_guard_1 = require("./guard/jwt.guard");
const serialization_provider_1 = require("./provider/serialization.provider");
const jwt_1 = require("@nestjs/jwt");
const jwt_const_1 = require("./const/jwt.const");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            local_guard_1.LocalAuthGuard,
            serialization_provider_1.LocalSerializer,
            basic_strategy_1.BasicStrategy,
            basic_guard_1.BasicAuthGuard,
            jwt_strategy_1.JwtStrategy,
            jwt_guard_1.JwtAuthGuard
        ],
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule.register({
                session: true,
                defaultStrategy: 'local',
            }),
            jwt_1.JwtModule.register({
                secret: jwt_const_1.jwtSecret,
                signOptions: { expiresIn: 36000000 },
            })
        ],
        exports: [
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            local_guard_1.LocalAuthGuard,
            serialization_provider_1.LocalSerializer,
            basic_strategy_1.BasicStrategy,
            basic_guard_1.BasicAuthGuard,
            jwt_strategy_1.JwtStrategy,
            jwt_guard_1.JwtAuthGuard
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
