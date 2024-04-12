import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { WishListItemsModule } from './wish-list-items/wish-list-items.module';
import { CartItemsModule } from './cart-items/cart-items.module';
import { RatingsModule } from './ratings/ratings.module';
import { OrdersModule } from './orders/orders.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    ProductsModule,
    WishListItemsModule,
    CartItemsModule,
    RatingsModule,
    OrdersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', 'Frontend', 'dist'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
