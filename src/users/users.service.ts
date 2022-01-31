import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string): Promise<User | null> {
    return undefined;
  }

  async findAll(): Promise<User[]> {
    return undefined;
  }

  async create(dto: CreateUserDto): Promise<User> {
    return undefined;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    return undefined;
  }

  async remove(id: string): Promise<User> {
    return undefined;
  }
}
