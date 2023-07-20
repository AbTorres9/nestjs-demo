import { Injectable } from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {
    console.log('User Service Triggered');
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    return this.userModel.create(userDto);
  }
}
