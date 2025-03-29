import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with a specific origin
  app.enableCors({
    origin: 'http://localhost:3000', // Specify the allowed origin (your Next.js app's address)
    methods: 'GET, POST, PUT, DELETE', // Allowed methods
    allowedHeaders: 'Content-Type, Authorization', // Allowed headers
  });

  await app.listen(3001); // Port your NestJS server is listening on
}
bootstrap();
