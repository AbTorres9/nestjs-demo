import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  BelongsTo,
  HasOne,
  AutoIncrement,
} from 'sequelize-typescript';
import { User } from './user.entity';
import { Category } from './category.entity';

@Table
export class Posts extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  UserId: number;

  @BelongsTo(() => User)
  user: User;

  @HasOne(() => Category, {
    foreignKey: {
      name: 'UserId',
    },
  })
  category: Category;

  @Column
  postId: number;

  @Column
  title: string;

  @Column
  summary: string;

  // @Column
  // createdAt: string;

  // @Column
  // lastModified: string;

  @Column
  categoryId: string;

  @Column
  categoryName: string;
}
