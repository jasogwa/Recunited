import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { DoctorDto } from './dto/doctors.dto';
import { SearchDoctorsDto } from './dto/search-doctors.dto';

@Injectable()
export class DoctorsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: DoctorDto) {
    try {
      const doctor = await this.prisma.doctor.create({ data: { ...dto } });
      return doctor;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  getDoctors() {
    return this.prisma.doctor.findMany();
  }

  async updateDoctor(doctorId: number, dto: DoctorDto) {
    const doctor = await this.prisma.doctor.update({
      where: {
        id: doctorId,
      },
      data: {
        ...dto,
      },
    });

    return doctor;
  }

  async deleteDoctor(doctorId: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: {
        id: doctorId,
      },
    });

    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    await this.prisma.doctor.delete({
      where: {
        id: doctorId,
      },
    });
  }

  async searchDoctors(dto: SearchDoctorsDto) {
    const doctors = await this.prisma.doctor.findMany({
      where: {
        city: dto.city,
        areaOfExpertise: dto.areaOfExpertise,
        facility: dto.facility,
      },
    });
    return doctors;
  }
}
