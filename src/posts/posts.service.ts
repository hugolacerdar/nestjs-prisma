import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string): Promise<Post | null> {
    return await this.prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  async findAll(): Promise<Post[]> {
    return await this.prisma.post.findMany({ include: { author: true } });
  }

  async getPublishedPosts(): Promise<Post[]> {
    return await this.prisma.post.findMany({
      where: { published: true },
      include: { author: true },
    });
  }

  async create(dto: CreatePostDto): Promise<Post> {
    const email = dto.authorEmail;
    delete dto.authorEmail;
    const data: Prisma.PostCreateInput = {
      ...dto,
      author: {
        connect: {
          email,
        },
      },
    };

    return await this.prisma.post.create({
      data,
      include: {
        author: true,
      },
    });
  }

  async update(id: string, dto: UpdatePostDto): Promise<Post> {
    const data: Prisma.PostUpdateInput = {
      ...dto,
    };

    return await this.prisma.post.update({
      data,
      where: { id },
    });
  }

  async remove(id: string): Promise<Post> {
    return await this.prisma.post.delete({ where: { id } });
  }
}
