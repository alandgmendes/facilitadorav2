import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create_user.dto';
import { User } from './schemas/user.schema';
import { FilterQuery } from 'mongoose';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get(':email')
  getProfile(@Param() params: any): Promise<User[] | undefined> {
    const email = params.email;
    return this.userService.acharTodos();
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  signup(@Body() creteUserDto: CreateUserDto) {
    return this.userService.create(creteUserDto);
  }
}
//git test
