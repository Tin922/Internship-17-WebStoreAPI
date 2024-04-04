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
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RatingEntity } from './entities/rating.entity';
import { UserAuthGuard } from 'src/users/user-auth.guard';

@Controller('ratings')
@ApiTags('Ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Post()
  @ApiCreatedResponse({ type: RatingEntity })
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingsService.create(createRatingDto);
  }

  @UseGuards(UserAuthGuard)
  @Get()
  @ApiOkResponse({ type: RatingEntity, isArray: true })
  findAll(@Req() { user }) {
    return this.ratingsService.findAll(user.id);
  }

  @UseGuards(UserAuthGuard)
  @Get(':id')
  @ApiOkResponse({ type: RatingEntity })
  findOne(@Param('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.ratingsService.findOne(id, user.id);
  }

  @UseGuards(UserAuthGuard)
  @Patch(':id')
  @ApiOkResponse({ type: RatingEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRatingDto: UpdateRatingDto,
    @Req() { user },
  ) {
    return this.ratingsService.update(id, updateRatingDto, user.id);
  }

  @Delete(':id')
  @ApiOkResponse({ type: RatingEntity })
  remove(@Param('id') id: string) {
    return this.ratingsService.remove(+id);
  }
}
