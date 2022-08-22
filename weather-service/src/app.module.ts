import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(),
     HttpModule.register({baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                          params: {appid: '9f95f236fe56c8c0e60b245b6145cd1d'},
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
