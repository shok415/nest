import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TourDto } from 'src/dto/tour-dto';
import { ITourClient } from 'src/interfaces/Tour';
import { Tour, TourDocument } from 'src/shemas/tour';

@Injectable()
export class ToursService {

    private toursCount = 10;

    constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>){

    }

    async generateTours():Promise<Tour[]> {
        for(let i=0; i <= this.toursCount; i++){
            const tour = new TourDto('test'+i, 'test desc', 'test operator','288'+i, 'test img');
            const tourData = new this.tourModel(tour);
            await tourData.save();
        }       

        return this.tourModel.find();
    }

    async deleteTours(): Promise<any>{
        return this.tourModel.deleteMany({})
    }

    async getAllTours(): Promise<Tour[]> {
        return this.tourModel.find();
    }

    async getTourById(id): Promise<Tour> {
        return this.tourModel.findById(id);
    }
    
    async uploadTour(body:ITourClient){
        const tour = new TourDto(body.name,body.description, body.tourOperator, body.price, body.img);
        const tourData = new this.tourModel(tour)
        await tourData.save()
    }

    async getToursByName(name): Promise<Tour[]> {
        return this.tourModel.find({name: { "$regex": name, "$options": "i" }})
 
    }
}
