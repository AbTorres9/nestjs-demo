import { Injectable } from '@nestjs/common';
import { Category } from 'src/database/entities/category.entity';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategoryService {
  async create(categoryDto: any): Promise<Category> {
    return await Category.create(categoryDto);
  }
}
