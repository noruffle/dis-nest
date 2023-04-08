import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { Auth } from './auth/auth.module';
import { Users } from './users/users.module';

@Module({

  imports: [
    Auth, Users,
    MongooseModule.forRoot('mongodb+srv://ruffle:7112812kreZ@cluster-ruffle.vplqcb5.mongodb.net/users?retryWrites=true&w=majority')
  ],
  
})
export class Engine{}