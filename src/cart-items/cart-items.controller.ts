import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CartItemEntity } from './entities/cart-item.entity';

@Controller('cart-items')
@ApiTags('Cart Items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Post()
  @ApiCreatedResponse({ type: CartItemEntity })
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemsService.create(createCartItemDto);
  }

  @Get()
  @ApiOkResponse({ type: CartItemEntity, isArray: true })
  findAll() {
    return this.cartItemsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CartItemEntity })
  findOne(@Param('id') id: string) {
    return this.cartItemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CartItemEntity })
  update(
    @Param('id') id: string,
    @Body() updateCartItemDto: UpdateCartItemDto,
  ) {
    return this.cartItemsService.update(+id, updateCartItemDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CartItemEntity })
  remove(@Param('id') id: string) {
    return this.cartItemsService.remove(+id);
  }
}
