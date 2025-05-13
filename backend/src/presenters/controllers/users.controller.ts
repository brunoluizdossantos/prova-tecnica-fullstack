import { CreateUserDto } from '@application/dto/create-user.dto';
import { UpdateUserDto } from '@application/dto/update-user.dto';
import { AuthGuard } from '@application/services/auth.guard';
import { UsersService } from '@application/services/users.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe } from '@nestjs/common';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<any> {
    return await this.usersService.createUserAsync(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAllUsers(): Promise<any> {
    return await this.usersService.findAllUsersAsync();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findUser(@Param('id') id: string): Promise<any> {
    return await this.usersService.findUserAsync(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body(new ValidationPipe()) updateUserDto: UpdateUserDto): Promise<any> {
    return await this.usersService.updateUserAsync(id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    return await this.usersService.deleteUserAsync(id);
  }
}
