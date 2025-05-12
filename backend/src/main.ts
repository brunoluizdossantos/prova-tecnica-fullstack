import { NestFactory } from '@nestjs/core';
import { AuthModule } from './infra/modules/auth.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Prova Técnica Fullstack')
    .setDescription(
      'API desenvolvida para a prova técnica fullstack.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
