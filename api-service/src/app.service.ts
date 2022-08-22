import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
@Injectable()
export class AppService {
/** 
  constructor(
  @Inject('WEATHER_SERVICE') private client: ClientProxy
){}
*/

  getHello(): string {
    return 'Hello World!';
  }
/** 
 async getWeather(){
   try{
    const weatherResult = await this.client.send({ cmd: 'weather-data'}, 'London')
    console.log(weatherResult);
   }catch(error){
     console.log(error)
   }
   */
      
 
   
}
