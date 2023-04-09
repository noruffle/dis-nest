import { Controller, Get, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { GetUser } from "../auth/decorator";
import { JwtGuards } from "../auth/guards";

@UseGuards(JwtGuards)
@Controller('users')
export class UsersController {

  @HttpCode(200)
  @Get()
  showUser(@GetUser() user: User) {
    return `Hello ${user}`
  }
}
