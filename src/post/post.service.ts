import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Posts } from 'src/database/entities/post.entity';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';

@Injectable()
export class PostService {
  async create(postDto: any): Promise<Posts> {
    return await Posts.create(postDto);
  }

  async getPostbyId(id: number): Promise<Posts> {
    const dataReceived = await Posts.findOne({ where: { postId: id } });
    if (dataReceived === null) {
      {
        throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
      }
    } else {
      return dataReceived;
    }
  }

  async updatePost(id: number, postDto: UpdatePostDto): Promise<Posts> {
    const oldPost = await Posts.findByPk(id);
    if (!oldPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    const { title, summary } = postDto;
    if (!title && !summary) {
      throw new BadRequestException('At least one field must be provided');
    }

    return await oldPost.update(postDto);
  }

  async deletePost(id: number): Promise<string> {
    const oldPost = await Posts.findByPk(id);
    if (!oldPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    await oldPost.destroy();
    return 'Deleted Successfully';
  }
}
