import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT).then(() => {
    app.useGlobalPipes(new ValidationPipe());
    console.log('Listening on port 3000');
  });
}
bootstrap();
