import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dtos/create-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  async create(userDto: any): Promise<User> {
    return await User.create(userDto);
  }

  async getUserbyId(id: number): Promise<User> {
    const dataReceived = await User.findByPk(id);
    console.log(dataReceived, 'DR');
    if (dataReceived === null) {
      {
        throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
      }
    } else {
      return dataReceived;
    }
  }
}
