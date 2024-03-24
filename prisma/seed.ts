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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
