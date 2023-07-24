import { Controller, Body, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { Category } from 'src/database/entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() categoryDto: any): Promise<Category> {
    let newPost = await this.categoryService.create(categoryDto);
    return newPost;
  }
}
