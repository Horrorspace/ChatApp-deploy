import { NestModule, MiddlewareConsumer } from '@nestjs/common';
export declare class SessionsModule implements NestModule {
    private readonly SequelizeStore;
    private readonly sequelize;
    private readonly sessionStore;
    configure(consumer: MiddlewareConsumer): void;
}
