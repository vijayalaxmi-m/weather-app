import * as mongoose from 'mongoose'

export const CitySchema = new mongoose.Schema({
    name: {type: String, required: true},
});
export interface City{
    id: string, 
    name: string,
        
}