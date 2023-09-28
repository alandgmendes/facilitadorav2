import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('produto/orcamento')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':inputString')
  getHello(@Param('inputString') inputString: string): any {
    return this.appService.getHello(inputString);
  }
}
