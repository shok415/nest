import { IOrder } from "src/interfaces/order";
export declare class OrderDto implements IOrder {
    age: string;
    birthDay: string;
    cardNumber: string;
    tourId: string;
    userId: string;
    constructor(age: any, birthDay: any, cardNumber: any, tourId: any, userId: any);
}
