import { Model } from 'mongoose';
import { OrderDto } from 'src/dto/order-dto';
import { Order, OrderDocument } from 'src/shemas/order';
export declare class OrderService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    sendOrder(data: OrderDto): Promise<Order>;
    getAllOrders(): Promise<Order[]>;
}
