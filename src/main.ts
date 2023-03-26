import {NestFactory} from '@nestjs/core'
import {appModule} from './app.module';

async function app() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(appModule)

  app.listen(PORT, () => console.log('App is up'))
}

app()