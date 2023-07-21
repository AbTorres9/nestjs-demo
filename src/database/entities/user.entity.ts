import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  UserId: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  mobile: number;

  @Column
  email: string;

  @Column
  password: string;

  //   @Column
  //   hashedPassword: string;

  @Column
  description: string;
}
