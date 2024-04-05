import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ParseIntPipe,
} from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CartItemEntity } from './entities/cart-item.entity';
import { UserAuthGuard } from 'src/users/user-auth.guard';

@Controller('cart-items')
@ApiTags('Cart Items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @UseGuards(UserAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: CartItemEntity })
  create(@Body() createCartItemDto: CreateCartItemDto, @Req() { user }) {
    return this.cartItemsService.create(createCartItemDto, user.id);
  }

  @UseGuards(UserAuthGuard)
  @Get()
  @ApiOkResponse({ type: CartItemEntity, isArray: true })
  findAll(@Req() { user }) {
    return this.cartItemsService.findAll(user.id);
  }

  @UseGuards(UserAuthGuard)
  @Get(':id')
  @ApiOkResponse({ type: CartItemEntity })
  findOne(@Param('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.cartItemsService.findOne(id, user.id);
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
