import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersEntity } from './entities/order.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserAuthGuard } from 'src/users/user-auth.guard';

@Controller('orders')
@ApiTags('Orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(UserAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: OrdersEntity })
  create(@Req() { user }) {
    return this.ordersService.create(user.id);
  }

  @UseGuards(UserAuthGuard)
  @Get()
  @ApiOkResponse({ type: OrdersEntity, isArray: true })
  findAll(@Req() { user }) {
    return this.ordersService.findAll(user.id);
  }

  @UseGuards(UserAuthGuard)
  @Get(':id')
  @ApiOkResponse({ type: OrdersEntity })
  findOne(@Param('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.ordersService.findOne(id, user.id);
  }

  @UseGuards(UserAuthGuard)
  @Delete(':id')
  @ApiOkResponse({ type: OrdersEntity })
  remove(@Param('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.ordersService.remove(id, user.id);
  }
}
