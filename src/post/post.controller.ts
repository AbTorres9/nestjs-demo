import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Posts } from 'src/database/entities/post.entity';
import { PostService } from './post.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() postDto: CreatePostDto): Promise<Posts> {
    let newPost = await this.postService.create(postDto);
    return newPost;
  }

  @Get(':id')
  async readbyId(@Param('id') id: number): Promise<Posts> {
    let fetchedpost = await this.postService.getPostbyId(id);
    return fetchedpost;
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: number,
    @Body() postDto: UpdatePostDto,
  ): Promise<Posts> {
    return this.postService.updatePost(id, postDto);
  }
  @Delete(':id') //delete the product by specific id
  async delete(@Param('id') id: number): Promise<string> {
    return this.postService.deletePost(id);
  }
}
