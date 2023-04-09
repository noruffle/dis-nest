import { Module } from "@nestjs/common";
import { Auth } from "./auth/auth.module";
import { Users } from "./users/users.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { Home } from "./app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule,
    Auth,
    Users,
    PrismaModule,
  ],
  controllers: [Home]
})
export class Engine {}
