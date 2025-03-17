import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  registerUser(createUserDto: CreateUserDto) {
    const exists = this.users.find(user => user.userId === createUserDto.userId);
    if (exists) {
      throw new ConflictException('El usuario ya está registrado.');
    }
    this.users.push(createUserDto);
    return createUserDto;
  }

  findUserById(userId: string) {
    const user = this.users.find(user => user.userId === userId);
    if (!user) {
      throw new NotFoundException(`El usuario con id ${userId} no se encontró.`);
    }
    return user;
  }

  getAllUsers() {
    return this.users;
  }

  removeUser(userId: string) {
    const index = this.users.findIndex(user => user.userId === userId);
    if (index === -1) {
      throw new NotFoundException(`El usuario con id ${userId} no se encontró.`);
    }
    const removedUser = this.users.splice(index, 1);
    return removedUser[0];
  }

  updateUser(userId: string, updateUserDto: UpdateUserDto) {
    const user = this.users.find(user => user.userId === userId);
    if (!user) {
      throw new NotFoundException(`El usuario con id ${userId} no se encontró.`);
    }
    // Se actualizan solo los campos que vienen en updateUserDto
    Object.assign(user, updateUserDto);
    return user;
  }
}
