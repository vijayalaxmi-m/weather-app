import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import {MongooseModule} from '@nestjs/mongoose'
@Module({
  imports: [CityModule, 
            MongooseModule.forRoot(
              'mongodb+srv://vijayalaxmi:aSTjiLBDV97AA5My@mongodb-demo.kyog7y3.mongodb.net/weather-demo?retryWrites=true&w=majority'
              ),
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
