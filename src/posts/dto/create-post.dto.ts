import { IsEmail, IsString } from 'class-validator';
import { Post } from '../entities/post.entity';

export class CreatePostDto extends Post {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsEmail()
  authorEmail: string;
}
