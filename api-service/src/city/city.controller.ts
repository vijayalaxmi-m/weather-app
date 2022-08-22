import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import  {CityService} from './city.service'
@Controller('cities')
export class CityController {
    constructor(private readonly cityService: CityService) {
        
    }
     @Post()
     async addCity(@Body('name') name:string){
         return await this.cityService.insertCity(name);
     }

    @Get()
    async getAllCities(){
        console.log("get all cities");
        const cities = await this.cityService.getCities();
        return cities;
    }

    @Get(':name')
    async getCityByName(@Param('name') name: string){
        return await this.cityService.getCityByName(name);
    }

    @Delete(':id')
    async deleteCity(@Param('id') id: string){
        await this.cityService.deleteCity(id);
    }




}
