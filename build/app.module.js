"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const users_model_1 = require("./users/users.model");
const messages_model_1 = require("./messages/messages.model");
const users_module_1 = require("./users/users.module");
const messages_module_1 = require("./messages/messages.module");
const auth_module_1 = require("./auth/auth.module");
const sessions_module_1 = require("./sessions/sessions.module");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
let AppModule = class AppModule {
    configure(consumer) {
        console.log((0, path_1.join)(process.cwd(), 'build', 'client'));
        consumer
            .apply()
            .forRoutes({
            path: '/**',
            method: common_1.RequestMethod.ALL,
        });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, 'client'),
                exclude: ['/api/*', '/public/*']
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false
                    }
                },
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.CHAT_DB,
                models: [users_model_1.User, messages_model_1.Message],
                ssl: true,
                autoLoadModels: true,
                logging: false
            }),
            graphql_1.GraphQLModule.forRoot({
                debug: true,
                playground: true,
                typePaths: ['./**/*.graphql'],
                context: ({ req }) => ({ headers: req.headers })
            }),
            sessions_module_1.SessionsModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            messages_module_1.MessagesModule
        ],
        exports: []
    })
], AppModule);
exports.AppModule = AppModule;
