"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MessagesModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const messages_controller_1 = require("./messages.controller");
const messages_service_1 = require("./messages.service");
const messages_model_1 = require("./messages.model");
const users_module_1 = require("../users/users.module");
const messages_gateway_1 = require("./messages.gateway");
const auth_module_1 = require("../auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const jwt_const_1 = require("../auth/const/jwt.const");
const messages_resolver_1 = require("./messages.resolver");
let MessagesModule = MessagesModule_1 = class MessagesModule {
};
MessagesModule = MessagesModule_1 = __decorate([
    (0, common_1.Module)({
        controllers: [messages_controller_1.MessagesController],
        providers: [messages_service_1.MessagesService, messages_gateway_1.MessagesGateway, messages_resolver_1.MessagesResolver],
        imports: [
            sequelize_1.SequelizeModule.forFeature([messages_model_1.Message]),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            jwt_1.JwtModule.register({
                secret: jwt_const_1.jwtSecret
            })
        ],
        exports: [MessagesModule_1, messages_gateway_1.MessagesGateway, messages_resolver_1.MessagesResolver]
    })
], MessagesModule);
exports.MessagesModule = MessagesModule;
