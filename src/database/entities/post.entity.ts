import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { User } from './user.entity';

@Table
export class Post extends Model {
  @ForeignKey(() => User)
  userId: string;

  @Column
  postId: string;

  @Column
  title: string;

  @Column
  summary: number;

  @Column
  createdAt: string;

  @Column
  lastModified: string;

  @Column
  categoryId: string;

  @Column
  categoryName: string;
}
