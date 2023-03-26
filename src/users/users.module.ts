import { MongooseModule } from '@nestjs/mongoose';
import {usersController} from './users.controller';
import {usersService} from './users.service';
import {Module} from '@nestjs/common';
import { User, UserSchema } from './users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], 'users')
  ],
  controllers: [usersController],
  providers: [usersService],
  exports: [usersService]
})

export class usersModule {}