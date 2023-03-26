import {Controller, Get} from '@nestjs/common'
import { usersService } from './users.service';

@Controller('/api')
export class usersController {

  constructor(private service: usersService) {}


}