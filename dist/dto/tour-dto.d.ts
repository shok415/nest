import { ITour } from "src/interfaces/Tour";
export declare class TourDto implements ITour {
    name: string;
    description: string;
    tourOperator: string;
    price: string;
    img: string;
    id: string;
    type: string;
    date: string;
    constructor(name: any, description: any, tourOperator: any, price: any, img: any);
}
