import { CreateUserDto } from '@application/dto/create-user.dto';
import { UpdateUserDto } from '@application/dto/update-user.dto';
import { PrismaService } from '@infra/data/client/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  
  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prismaService.user.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
      }
    });
  }

  findOne(id: string) {
    return this.prismaService.user.findFirst({
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

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
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

  remove(id: string) {
    return this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
