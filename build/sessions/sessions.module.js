"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsModule = void 0;
const common_1 = require("@nestjs/common");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const sequelize_1 = require("sequelize");
const connect_session_sequelize_1 = __importDefault(require("connect-session-sequelize"));
let SessionsModule = class SessionsModule {
    constructor() {
        this.SequelizeStore = (0, connect_session_sequelize_1.default)(express_session_1.default.Store);
        this.sequelize = new sequelize_1.Sequelize({
            dialect: 'postgres',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            },
            host: process.env.SESSION_HOST,
            port: Number(process.env.SESSION_PORT),
            username: process.env.SESSION_USER,
            password: process.env.SESSION_PASSWORD,
            database: process.env.SESSION_DB,
            ssl: true,
            logging: false
        });
        this.sessionStore = new this.SequelizeStore({
            db: this.sequelize,
            checkExpirationInterval: 60 * 60 * 1000,
            expiration: 24 * 60 * 60 * 1000
        });
    }
    configure(consumer) {
        this.sessionStore.sync();
        consumer
            .apply((0, cookie_parser_1.default)(), (0, express_session_1.default)({
            secret: "cats and dogs",
            store: this.sessionStore,
            resave: false,
            proxy: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 24 * 60 * 60 * 1000,
                secure: false,
                httpOnly: false,
                sameSite: true,
            }
        }), passport_1.default.initialize(), passport_1.default.session())
            .forRoutes('*');
    }
};
SessionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [],
        exports: []
    })
], SessionsModule);
exports.SessionsModule = SessionsModule;
