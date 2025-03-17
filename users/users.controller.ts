import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.registerUser(createUserDto);
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Get(':userId')
  getUserById(@Param('userId') userId: string) {
    return this.usersService.findUserById(userId);
  }

  @Delete(':userId')
  remove(@Param('userId') userId: string) {
    return this.usersService.removeUser(userId);
  }

  @Patch(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(userId, updateUserDto);
  }
}
