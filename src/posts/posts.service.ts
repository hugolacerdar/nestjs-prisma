import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  async findOne(id: string): Promise<Post | null> {
    return undefined;
  }

  async findAll(): Promise<Post[]> {
    return undefined;
  }

  async getPublishedPosts(): Promise<Post[]> {
    return undefined;
  }

  async create(dto: CreatePostDto): Promise<Post> {
    return undefined;
  }

  async update(id: string, dto: UpdatePostDto): Promise<Post> {
    return undefined;
  }

  async remove(id: string): Promise<Post> {
    return undefined;
  }
}
