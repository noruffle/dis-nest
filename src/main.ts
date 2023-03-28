import {NestFactory} from '@nestjs/core'
import {appModule} from './app.module';

async function app() {
  const app = await NestFactory.create(appModule)

  app.listen(process.env.PORT, () => console.log('App is up'))
}

app()