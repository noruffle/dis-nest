import { Controller, Get } from "@nestjs/common";

@Controller()
export class Home {

  @Get()
  home() {
    return 'hello world'
  }
}