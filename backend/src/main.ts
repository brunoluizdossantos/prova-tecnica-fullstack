import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '@infra/modules/app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Prova Técnica Fullstack')
    .setDescription(
      'API desenvolvida para a prova técnica fullstack.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));

  app.enableCors({ 
    origin: ['http://localhost:3001'],
    methods: ['POST', 'PUT', 'DELETE', 'GET', 'PATCH'],
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
