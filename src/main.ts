import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //dto class validator globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //removes property that are not defined in the dto
      forbidNonWhitelisted: true, //throws an error if property is not defined in the dto
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
