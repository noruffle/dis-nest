import { Connection, Model } from 'mongoose';
import { Injectable, Post, Body } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class usersService {
  
  constructor(@InjectModel(User.name) private usersModel: Model<UserDocument>) {}

  @Post()
  async create(@Body() createCatDTO: CreateUserDto): Promise<User> {
    
    const createdUser = new this.usersModel(createCatDTO)
    console.log(`email: ${createCatDTO.email}\n Password: ${createCatDTO.password}`)
    return createdUser
      .save()
  }

  async findAllUsers(): Promise<User[]> {
    
    return this.usersModel
      .find()
      .exec()
  }
}
