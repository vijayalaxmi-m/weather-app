import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CitySchema } from './city.model';
@Module({
  imports: [
    MongooseModule.forFeature([{name: 'City', schema: CitySchema}]),
    ClientsModule.register([
      {
        name: "WEATHER_SERVICE",
        transport: Transport.TCP
      }
    ])
  ],
  providers: [CityService],
  controllers: [CityController]
})
export class CityModule {}
