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
import { WishListItemsService } from './wish-list-items.service';
import { CreateWishListItemDto } from './dto/create-wish-list-item.dto';
import { UpdateWishListItemDto } from './dto/update-wish-list-item.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { WishListItemEntity } from './entities/wish-list-item.entity';
import { UserAuthGuard } from 'src/users/user-auth.guard';

@Controller('wish-list-items')
@ApiTags('WishList')
export class WishListItemsController {
  constructor(private readonly wishListItemsService: WishListItemsService) {}

  @UseGuards(UserAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: WishListItemEntity })
  create(
    @Req() { user },
    @Body() createWishListItemDto: CreateWishListItemDto,
  ) {
    return this.wishListItemsService.create(user.id, createWishListItemDto);
  }

  @UseGuards(UserAuthGuard)
  @Get()
  @ApiOkResponse({ type: WishListItemEntity, isArray: true })
  findAll(@Req() { user }) {
    return this.wishListItemsService.findAll(user.id);
  }

  @UseGuards(UserAuthGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.wishListItemsService.findOne(id, user.id);
  }

  @UseGuards(UserAuthGuard)
  @Patch(':id')
  @ApiOkResponse({ type: WishListItemEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateWishListItemDto: UpdateWishListItemDto,
    @Req() { user },
  ) {
    return this.wishListItemsService.update(id, updateWishListItemDto, user.id);
  }

  @UseGuards(UserAuthGuard)
  @Delete(':id')
  @ApiOkResponse({ type: WishListItemEntity })
  remove(@Param('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.wishListItemsService.remove(id, user.id);
  }
}
