import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  userId: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  mobile: number;

  @Column
  email: string;

  //   @Column
  //   hashedPassword: string;

  @Column
  description: string;
}
