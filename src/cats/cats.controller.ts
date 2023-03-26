import {Controller, Get, Post, Patch, Delete, Req, Res, HttpCode, Header, Param, Body} from '@nestjs/common';
import { CatCreateDto } from './dto/cat-create.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {

  constructor(
    private service: CatsService
  ) {}

  @Get()
  @HttpCode(200)
  @Header('Our cats here', 'none')
    async show () {
      await this.service.show();
    }

  @Get()
  @HttpCode(200)
  @Header('Found one', 'none')
    async one (@Param('id') id: string) {
      await this.service.one(id)
    }

  @Post()
  @HttpCode(201)
  @Header('Created new cat', 'none')
    async create (@Body() catCreateDto: CatCreateDto, ) {
      await this.service.create(catCreateDto)
    }

  @Patch(':id')
  @HttpCode(201)
  @Header('Cat info updated', 'none')
    async update (@Param('id') id: string, update: []) {
      await this.service.update(id, update)
   }

  @Delete(':id')
  @HttpCode(204)
  @Header('Sadly cat deleted', 'none')
    async remove (@Param('id') id: string) {
      await this.service.remove(id)
    }

}