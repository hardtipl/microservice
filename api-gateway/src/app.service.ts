import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Samplepost } from './sample-post.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('account') private readonly account:ClientProxy
    ){}
  getHello(): string {
    return 'Hello World!';
  }
  createpost(postreq:Samplepost):string{
    console.log(`sample code passed in api-gateway `,postreq)
 this.account.emit('create_users',postreq)
    return `congratulation post created`
  }
}
