import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ITour, ITourClient } from 'src/interfaces/Tour';
import { ToursService } from 'src/services/tours/tours.service';
import { StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Tour } from 'src/shemas/tour';

@Controller('tour-item')
export class TourItemController {

    constructor(private toursService:ToursService){
    }

    static imgName:string;

    @Post()
    @UseInterceptors(FileInterceptor('img', {
        storage:diskStorage({
           destination: './public/',
           filename:(req,file,cb) => {
            const imgType = file.mimetype.split('/')
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1E9)
            const imgName = file.fieldname + '-' + uniqueSuffix + '.' + imgType[1]

            cb(null, imgName);
            TourItemController.imgName = imgName;
           }
        })
    })
    )
    initTours(@Body() body:ITourClient):void{
        body.img = TourItemController.imgName;
        this.toursService.uploadTour(body)
    }


    @Get("/img/:id")
    getFile(@Param('id') id): StreamableFile {
        const file = createReadStream(join(process.cwd(), '/public/' + id));
        return new StreamableFile(file);
    }

    @Get(":name")
    getUserById(@Param('name') name): Promise<Tour[]> {
        return this.toursService.getToursByName(name)
    }

    @Get()
    getToursList(): Promise<Tour[]> {
        return this.toursService.getAllTours()
    }    
}
