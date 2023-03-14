import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @EventPattern('create_users')
  // @MessagePattern({ cmd: 'MY_MICROSERVICE_COMMAND' })
  hadleuser(data:any){
    console.log(`what will be the data`,data)
return data
  }
}
