import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: "mongodb+srv://ruffle:7112812kreZ@cluster-ruffle.vplqcb5.mongodb.net/?retryWrites=true&w=majority"
        }
      }
    })
  }
}