import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['thisisasupersecretkey'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // stripe out extraneous fields
    }),
  );
  await app.listen(3000);
}
bootstrap();
