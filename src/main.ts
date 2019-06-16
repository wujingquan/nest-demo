import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiParamsValidationPipe } from './common/pipes/api-params-validation.pipe';
import { static as resource } from 'express';
import * as art from 'express-art-template';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 处理静态文件
  app.use('/static', resource('resource'));

  // 指定模板引擎
  app.engine('art', art);

  // 设置模板引擎的配置项
  app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    minimize: true,
  });

  // 设置视图文件的所在目录
  app.setBaseViewsDir('resource/views');

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ApiParamsValidationPipe());

  await app.listen(3000);
}
bootstrap();
