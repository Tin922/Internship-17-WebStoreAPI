import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WishListItemsService } from './wish-list-items.service';
import { CreateWishListItemDto } from './dto/create-wish-list-item.dto';
import { UpdateWishListItemDto } from './dto/update-wish-list-item.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { WishListItemEntity } from './entities/wish-list-item.entity';

@Controller('wish-list-items')
@ApiTags('WishList')
export class WishListItemsController {
  constructor(private readonly wishListItemsService: WishListItemsService) {}

  @Post()
  @ApiCreatedResponse({ type: WishListItemEntity })
  create(@Body() createWishListItemDto: CreateWishListItemDto) {
    return this.wishListItemsService.create(createWishListItemDto);
  }

  @Get()
  @ApiOkResponse({ type: WishListItemEntity, isArray: true })
  findAll() {
    return this.wishListItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishListItemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: WishListItemEntity })
  update(
    @Param('id') id: string,
    @Body() updateWishListItemDto: UpdateWishListItemDto,
  ) {
    return this.wishListItemsService.update(+id, updateWishListItemDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: WishListItemEntity })
  remove(@Param('id') id: string) {
    return this.wishListItemsService.remove(+id);
  }
}
