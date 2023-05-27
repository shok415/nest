import { Model } from 'mongoose';
import { ITourClient } from 'src/interfaces/Tour';
import { Tour, TourDocument } from 'src/shemas/tour';
export declare class ToursService {
    private tourModel;
    private toursCount;
    constructor(tourModel: Model<TourDocument>);
    generateTours(): Promise<Tour[]>;
    deleteTours(): Promise<any>;
    getAllTours(): Promise<Tour[]>;
    getTourById(id: any): Promise<Tour>;
    uploadTour(body: ITourClient): Promise<void>;
    getToursByName(name: any): Promise<Tour[]>;
}
