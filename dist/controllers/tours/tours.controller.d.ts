import { ToursService } from 'src/services/tours/tours.service';
import { Tour } from 'src/shemas/tour';
export declare class ToursController {
    private tourService;
    constructor(tourService: ToursService);
    getToursList(): Promise<Tour[]>;
    getUserById(id: any): Promise<Tour>;
    initTours(): Promise<Tour[]>;
    removeAllTours(): void;
}
