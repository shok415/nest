import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/shemas/order';
import { OrderController } from './order.controller';
import { OrderService } from 'src/services/order/order.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
    controllers: [OrderController],
    providers: [OrderService]
})
export class OrderModule {}
