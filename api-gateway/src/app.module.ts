import { Module } from '@nestjs/common';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "account",
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 4000,
        },
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
