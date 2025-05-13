import { CreateUserDto } from '@application/dto/create-user.dto';
import { UpdateUserDto } from '@application/dto/update-user.dto';
import { AuthGuard } from '@application/services/auth.guard';
import { imageFileFilter } from '@application/services/file.utils';
import { UsersService } from '@application/services/users.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe, UseInterceptors, UploadedFile, HttpStatus, ParseFilePipeBuilder } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

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

  @UseGuards(AuthGuard)
  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: process.env.FILE_UPLOAD_PATH || '',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          cb(null, `${file.fieldname}-${uniqueSuffix}.${file.mimetype.split('/')[1]}`);
        }
      }),
      limits: {
        fileSize: 1024 * 1024 * 2, // 2MB
      },
      fileFilter: imageFileFilter,
    }
  ))
  async uploadUserImage(@Param('id') id: string, @UploadedFile() file: Express.Multer.File): Promise<any> {
      return await this.usersService.uploadUserImageAsync(id, file);
  }
}
