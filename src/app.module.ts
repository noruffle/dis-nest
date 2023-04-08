import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { Auth } from './auth/auth.module';
import { Users } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({

  imports: [ Auth, Users, PrismaModule],
  
})
export class Engine{}