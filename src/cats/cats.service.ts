import { Injectable, Param } from '@nestjs/common';
import { IForCat } from './interface/cat.interface';
import {CatSchema} from './schema/cat.schema';
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CatsService {
  @InjectModel(CatSchema.login) private cat: ;

  // GET
  show () {
    const foundCat = this.cat.
  }

  one (id: string) {
    return `Cat founded by id: ${id}`
  }

  // POST
  create (newie: IForCat) {
    this.cat.push(newie);
  }

  // PATCH
  update (id: string, update: []) {
    return 'rename cat'
  }

  // DEL
  remove (id: string) {
    return 'removed cat'
  }
}