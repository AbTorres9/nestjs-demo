import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Category extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  categoryId: string;

  @Column
  categoryName: string;
}
