import { CreateUserDto } from '@application/dto/create-user.dto';
import { UpdateUserDto } from '@application/dto/update-user.dto';
import { PrismaService } from '@infra/data/client/prisma.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from  'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  
  async createUserAsync(data: CreateUserDto): Promise<any> {
    const hashPassword = await bcrypt.hashSync(data.password, 10);
    return await this.prismaService.user.create({
      data: {
        ...data,
        password: hashPassword
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
      }
    });
  }

  async findAllUsersAsync(): Promise<any> {
    return await this.prismaService.user.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
      }
    });
  }

  async findUserAsync(id: string): Promise<any> {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
      }
    });
  }

  async updateUserAsync(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.prismaService.user.update({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
      },
      data: {
        name: updateUserDto.name,
        description: updateUserDto.description,
        image: updateUserDto.image,
      },
    });
  }

  async deleteUserAsync(id: string): Promise<any> {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
      },
    });
  }
}
