import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Esto permite que el frontend (localhost:3000) acceda al backend (localhost:4000)
  app.enableCors({
    origin: 'http://localhost:3000',
  });

  await app.listen(4000);
}
bootstrap();
