import { OrderDto } from 'src/dto/order-dto';
import { OrderService } from 'src/services/order/order.service';
import { Order } from 'src/shemas/order';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    initTours(data: OrderDto): void;
    getAllUsers(): Promise<Order[]>;
}
