/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  console.log('process.env.port', process.env.port);

  const PORT = process.env.port || 3333;

  await app.listen(PORT, () => {
    console.log('Listening at http://localhost:' + PORT + '/' + globalPrefix);
  });
}

bootstrap();
