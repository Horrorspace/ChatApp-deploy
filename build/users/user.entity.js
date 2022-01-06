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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class UserEntity {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Уникальный идентификатор пользователя' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Статус активности пользователя (онлайн / оффлайн)' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "online", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ссылка на аватар пользователя' }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatarSrc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Статус учетной записи пользователя (подтверждена / не подтверждена)' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "confirmed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Имя пользователя' }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email идентификатор пользователя' }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserEntity.prototype, "updatedAt", void 0);
exports.UserEntity = UserEntity;
