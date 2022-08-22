import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios';
import { Observable, firstValueFrom, map } from 'rxjs';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
                private readonly httpService: HttpService) {}

  @MessagePattern({ cmd: 'weather-data' })
   fetchWeatherData(cityName: String): Observable<AxiosResponse<object, any>>  {
    return this.httpService
      .get(`?q=${cityName}`)
      .pipe(
         map((axiosResponse: AxiosResponse) => {
            return axiosResponse.data;   
         }),
      );
  }
 
}
