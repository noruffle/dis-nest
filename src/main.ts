import {NestFactory} from '@nestjs/core'
import {Engine} from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function app() {
  const app = await NestFactory.create(Engine)
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  
  await app.listen(process.env.PORT)
}

app()
