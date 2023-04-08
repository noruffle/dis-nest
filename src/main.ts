import {NestFactory} from '@nestjs/core'
import {Engine} from './app.module';

async function app() {
  const app = await NestFactory.create(Engine)
  await app.listen(process.env.PORT)
}

app()