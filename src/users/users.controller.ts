import { Controller, Get, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { GetUser } from "src/auth/decorator";
import { JwtGuards } from "src/auth/guards";

@UseGuards(JwtGuards)
@Controller('users')
export class UsersController {

  @HttpCode(HttpStatus.OK)
  @Get()
  showUser(@GetUser() user: User) {
    return user
  }
}
