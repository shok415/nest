import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ToursService } from 'src/services/tours/tours.service';
import { Tour } from 'src/shemas/tour';

@Controller('tours')
export class ToursController {

    constructor(private tourService: ToursService){

    }

    @Get()
    getToursList(): Promise<Tour[]> {
        return this.tourService.getAllTours()
    }       

    @Get(":id")
    getUserById(@Param('id') id): Promise<Tour> {
        return this.tourService.getTourById(id);
    }

    @Post()
    initTours(): Promise<Tour[]> {
      return  this.tourService.generateTours()
    }

    @Delete()
    removeAllTours(): void {
       this.tourService.deleteTours();
    }

}
