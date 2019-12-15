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

  const PORT = process.env.PORT || 3333;

  await app.listen(PORT, () => {
    console.log('Listening at http://localhost:' + PORT + '/' + globalPrefix);
  });
  console.log('App is running, server is listening on port ', app.get('port'));
}

bootstrap();
