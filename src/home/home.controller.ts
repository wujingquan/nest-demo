import { Controller, Get, Res } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  index(@Res() res) {
    return res.render('home/home.art', {
      user: {
        name: 'aui',
        tags: ['art', 'template', 'nodejs']
      }
    });
  }
}
