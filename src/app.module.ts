import { Module } from "@nestjs/common";
import { Auth } from "./auth/auth.module";
import { Users } from "./users/users.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";

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
})
export class Engine {}
