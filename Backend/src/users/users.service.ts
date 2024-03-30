import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userName: string, email: string, password: string) {
    if (!userName) throw new BadRequestException('userName not defined');
    if (!email) throw new BadRequestException('Email not defined');
    if (!password) throw new BadRequestException('Password not defined');

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        userName,
      },
    });

    const payload = {
      id: user.id,
      email: user.email,
      role: 'user',
    };
    return { token: this.jwtService.sign(payload) };
  }

  async login(userName: string, email: string, password: string) {
    if (!userName) throw new BadRequestException('userName not defined');
    if (!email) throw new BadRequestException('Email not defined');
    if (!password) throw new BadRequestException('Password not defined');

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new BadRequestException('User does not exist');

    const isPasswordVaild = await compare(password, user.password);

    if (!isPasswordVaild) throw new ForbiddenException('Password not valid');

    const payload = {
      id: user.id,
      email: user.email,
      role: 'user',
    };
    return { token: this.jwtService.sign(payload) };
  }
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  async remove(id: number) {
    await this.prisma.orders.deleteMany({
      where: { id },
    });
    await this.prisma.cartItem.deleteMany({
      where: { id },
    });
    await this.prisma.rating.deleteMany({
      where: { id },
    });
    await this.prisma.wishListItem.deleteMany({
      where: { id },
    });
    return this.prisma.user.delete({
      where: { id: id },
    });
  }
}
