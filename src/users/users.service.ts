import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dtos/create_user.dto';

@Injectable()
export class UsersService {
  constructor(public readonly usersRepository: UsersRepository) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ email });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.create(createUserDto);
  }

  async acharTodos(): Promise<User[] | undefined> {
    return this.usersRepository.find({
      $expr: { $gt: [{ $strLenCP: '$email' }, 5] },
    });
  }
}
