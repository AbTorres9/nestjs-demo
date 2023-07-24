import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/database/entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userDto: any): Promise<User> {
    let newUser = await this.userService.create(userDto);
    delete newUser.dataValues.password;
    return newUser.dataValues;
  }

  @Get(':id')
  async readbyId(@Param('id') id: number): Promise<User> {
    let fetchedUser = await this.userService.getUserbyId(id);
    //console.log(fetchedUser, 'FU');

    return fetchedUser;
  }
}
