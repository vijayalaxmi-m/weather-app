import { Injectable, Inject, NotFoundException, ConflictException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './city.model';
import { map, firstValueFrom } from 'rxjs';
@Injectable()
export class CityService {

    constructor(@InjectModel('City') private readonly cityModel: Model<City>,
    @Inject('WEATHER_SERVICE') private weatherClient:ClientProxy
    ){}
    
    async insertCity(name: string){
        const city = await this.cityModel.findOne({name: name}).exec();
        if (city){
            throw new ConflictException('City already exists.');
        }
        const newCity = new this.cityModel({name});
        const result = await newCity.save();
        try{
            const weatherObservable = this.weatherClient.send({ cmd: 'weather-data'}, name)
            let data = await firstValueFrom(weatherObservable);
            return { cityId: result.id, weather : data};
        }catch(err){
            console.log(err);
            return { cityId: result.id }
        }
        
        
       
       
    }
    async getCities(){
        const cities = await this.cityModel.find().exec();
        return cities as City[];

    }

    async getCityByName(name: string):Promise<City>{
       
        const city = await this.cityModel.findOne({name: name}).exec();
        if (!city){
            throw new NotFoundException('No city found with the given name');
        }
        return city;
    }

    async deleteCity(id: string){
        return this.cityModel.findByIdAndDelete(id);
    }

   
}
