import { ITourClient } from 'src/interfaces/Tour';
import { ToursService } from 'src/services/tours/tours.service';
import { StreamableFile } from '@nestjs/common';
import { Tour } from 'src/shemas/tour';
export declare class TourItemController {
    private toursService;
    constructor(toursService: ToursService);
    static imgName: string;
    initTours(body: ITourClient): void;
    getFile(id: any): StreamableFile;
    getUserById(name: any): Promise<Tour[]>;
    getToursList(): Promise<Tour[]>;
}
