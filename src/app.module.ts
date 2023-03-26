import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import {LoggerMiddleware} from './logger.middleware';
import {CatsModule} from './cats/cats.module';
import {MongooseModule} from '@nestjs/mongoose'
import { CatsController } from './cats/cats.controller';

@Module({

  imports: [
    MongooseModule.forRoot('mongodb+srv://ruffle:7112812kreZ@cluster-ruffle.vplqcb5.mongodb.net/users?retryWrites=true&w=majority'),
    CatsModule,
  ],
  
})

export class appModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController);
  }
}