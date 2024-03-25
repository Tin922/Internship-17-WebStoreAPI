import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { WishListItemsModule } from './wish-list-items/wish-list-items.module';
import { CartItemsModule } from './cart-items/cart-items.module';
import { RatingsModule } from './ratings/ratings.module';

@Module({
  imports: [PrismaModule, UsersModule, ProductsModule, WishListItemsModule, CartItemsModule, RatingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
