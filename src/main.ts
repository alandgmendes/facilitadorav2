import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);
  const value: string | number | undefined = configService.get('PORT');
  const validValue: string | number = value !== undefined ? value : 'default';
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(validValue);
  console.log(`Listening on port ${configService.get('PORT')}`);
}
bootstrap();
