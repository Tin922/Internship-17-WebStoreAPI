import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { userName: 'mate' },
    update: {},
    create: {
      userName: 'mate',
      email: 'mate@gmail.com',
      password: 'mate123',
      isAdmin: false,
    },
  });
  const user2 = await prisma.user.upsert({
    where: { userName: 'admin' },
    update: {},
    create: {
      userName: 'admin',
      email: 'admin@gmail.com',
      password: 'admin',
      isAdmin: true,
    },
  });

  const product1 = await prisma.product.upsert({
    where: { title: 'Fjallraven' },
    update: {},
    create: {
      title: 'Fjallraven',
      price: 109.55,
      category: "men's clothing",
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      quantity: 5,
    },
  });
  const product2 = await prisma.product.upsert({
    where: { title: 'Mens Casual Slim Fit' },
    update: {},
    create: {
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      category: "men's clothing",
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      quantity: 11,
    },
  });
  const product3 = await prisma.product.upsert({
    where: { title: 'Mens Cotton Jacket' },
    update: {},
    create: {
      title: 'Mens Cotton Jacket',
      price: 55.99,
      category: "men's clothing",
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      quantity: 15,
    },
  });
  const wishListItem1 = await prisma.wishListItem.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: user1.id,
      productId: product1.id,
    },
  });

  const rating1 = await prisma.rating.upsert({
    where: { id: 1 },
    update: {},
    create: {
      rating: 5,
      userId: user1.id,
      productId: product3.id,
    },
  });
  const rating2 = await prisma.rating.upsert({
    where: { id: 2 },
    update: {},
    create: {
      rating: 4,
      userId: user1.id,
      productId: product2.id,
    },
  });

  const order1 = await prisma.orders.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: user1.id,
    },
  });
  const cartItem1 = await prisma.cartItem.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: user1.id,
      productId: product2.id,
      ordersId: order1.id,
    },
  });
  const cartItem2 = await prisma.cartItem.upsert({
    where: { id: 2 },
    update: {},
    create: {
      userId: user1.id,
      productId: product3.id,
      ordersId: order1.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
