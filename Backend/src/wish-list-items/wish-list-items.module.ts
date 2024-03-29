import { Module } from '@nestjs/common';
import { WishListItemsService } from './wish-list-items.service';
import { WishListItemsController } from './wish-list-items.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WishListItemsController],
  providers: [WishListItemsService],
  imports: [PrismaModule],
})
export class WishListItemsModule {}
