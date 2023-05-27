import { Body, Controller, Post, Get} from '@nestjs/common';
import { OrderDto } from 'src/dto/order-dto';
import { OrderService } from 'src/services/order/order.service';
import { Order } from 'src/shemas/order';

@Controller('order')
export class OrderController {

constructor(private orderService: OrderService){}

@Post()
initTours(@Body() data: OrderDto):void{
    const orderData = new OrderDto(data.age, data.birthDay, data.cardNumber, data.tourId, data.userId);
    this.orderService.sendOrder(orderData)
}


@Get()
getAllUsers(): Promise<Order[]> {
    return this.orderService.getAllOrders();
}

}
