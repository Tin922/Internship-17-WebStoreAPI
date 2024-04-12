import { Test, TestingModule } from '@nestjs/testing';
import { WishListItemsController } from './wish-list-items.controller';
import { WishListItemsService } from './wish-list-items.service';

describe('WishListItemsController', () => {
  let controller: WishListItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishListItemsController],
      providers: [WishListItemsService],
    }).compile();

    controller = module.get<WishListItemsController>(WishListItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
