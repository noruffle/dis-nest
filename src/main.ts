import {NestFactory} from '@nestjs/core'
import {Engine} from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function app() {
  const app = await NestFactory.create(Engine)
  
  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(process.env.PORT)
}

app()

{
  PROTOCOL: 'mongodb+srv';
  USERNAME: 'ruffle';
  PASSWORD: '7112812kreZ';
  HOST: "cluster-ruffle.vplqcb5.mongodb.net";
  DATABASE: 'ruffle'
}