import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ToursController } from './tours.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { jwtConstants } from 'src/static/private/constants';
import { Tour, TourSchema } from 'src/shemas/tour';
import { ToursService } from 'src/services/tours/tours.service';

@Module({  
    controllers: [ToursController],
    imports: [MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
    PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret
      })],
    providers:[ToursService]
})

export class ToursModule {

}
