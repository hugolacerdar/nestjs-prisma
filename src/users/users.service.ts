import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async create(dto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = { ...dto };

    return await this.prisma.user.create({ data });
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    return undefined;
  }

  async remove(id: string): Promise<User> {
    return undefined;
  }
}
