import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('produto/orcamento/:inputString')
  getHello(@Param('inputString') inputString: string): any {
    return this.appService.getHello(inputString);
  }

  @Get('api/enums')
  getEnums(): Promise<any> {
    return this.appService.getEnums();
  }
}
