import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Samplepost } from './sample-post.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  postrequests(@Body() smaple:Samplepost){
return    this.appService.createpost(smaple)

  }
}
