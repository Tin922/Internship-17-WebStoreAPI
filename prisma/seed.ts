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
    where: { title: 'Mens Casual Premium Slim Fit T-Shirts ' },
    update: {},
    create: {
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      category: "men's clothing",
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      quantity: 10,
    },
  });
  const product3 = await prisma.product.upsert({
    where: { title: '"Mens Cotton Jacket"' },
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
