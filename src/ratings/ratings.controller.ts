import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RatingEntity } from './entities/rating.entity';

@Controller('ratings')
@ApiTags('Ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Post()
  @ApiCreatedResponse({ type: RatingEntity })
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingsService.create(createRatingDto);
  }

  @Get()
  @ApiOkResponse({ type: RatingEntity, isArray: true })
  findAll() {
    return this.ratingsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: RatingEntity })
  findOne(@Param('id') id: string) {
    return this.ratingsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: RatingEntity })
  update(@Param('id') id: string, @Body() updateRatingDto: UpdateRatingDto) {
    return this.ratingsService.update(+id, updateRatingDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: RatingEntity })
  remove(@Param('id') id: string) {
    return this.ratingsService.remove(+id);
  }
}
