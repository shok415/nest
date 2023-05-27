import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tour, TourSchema } from 'src/shemas/tour';
import { TourItemController } from './tour-item.controller';
import { ToursService } from 'src/services/tours/tours.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }])],
    controllers: [TourItemController],
    providers: [ToursService]
})
export class TourItemModule {}
