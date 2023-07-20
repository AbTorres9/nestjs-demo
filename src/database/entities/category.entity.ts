import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Post extends Model {
  @Column
  categoryId: string;

  @Column
  categoryName: string;
}
