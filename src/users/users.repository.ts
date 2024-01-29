import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersRepository extends AbstractRepository<User> {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(
    @InjectModel(User.name) orderModel: Model<User>,
    @InjectConnection() connection: Connection,
  ) {
    super(orderModel, connection);
  }

  async findUserByEmail(email: string): Promise<User> {
    console.log('tentou aqui');
    try {
      const user = await this.findOne({ email });
      console.log(user);
      return user;
    } catch (error) {
      console.log('no user');
      throw error;
    }
  }
}
