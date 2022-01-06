"use strict";
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
exports.start = void 0;
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`mode is: ${process.env.NODE_ENV}`);
        const PORT = Number(process.env.PORT) || 3007;
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const swaggerConfig = new swagger_1.DocumentBuilder()
            .setTitle('ChatApp')
            .setDescription('ChatApp REST API description')
            .setVersion('1.0.0')
            .addBasicAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
        swagger_1.SwaggerModule.setup('api/docs', app, document);
        yield app.listen(PORT);
        console.log(`HTTP server has been started on port ${PORT}...`);
    });
}
exports.start = start;
start();
