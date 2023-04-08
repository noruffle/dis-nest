import { Module } from "@nestjs/common";
import { Auth } from "./auth/auth.module";
import { Users } from "./users/users.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    Auth,
    Users,
    PrismaModule,
  ],
})
export class Engine {}
