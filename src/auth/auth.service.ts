import { ForbiddenException, Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService
  ) {}

  async signup(dto: AuthDto) {
    try {
      // generate hash password
      const hash = await argon.hash(dto.password);

      // save to db
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });

      return this.signTocken(user.id, user. email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("Такой пользователь уже существует");
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    try {
      // find user by email
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });

      // if user doesn't exit throw exception
      if (!user) throw new ForbiddenException("Credentials incorrect. Неверные данные.");

      // compare passwords
      const pwMatches = await argon.verify(
        user.hash,
        dto.password
      );

      // if password incorrect throw exception
      if (!pwMatches) throw new ForbiddenException('Неверный пароль')

      // send back user
      return this.signTocken(user.id, user.email);

    } catch (error) {}
  }

  signTocken(
    userId: string,
    email: string
  ) {
    const payload = {
      sub: userId,
      email: email
    }
    const secret = this.config.get("JWT_SECRET")

    const tocken = this.jwt.signAsync(payload, {
      expiresIn: "15m",
      secret: secret
    })

    return {
      access_tocken: tocken
    }
  }
}
