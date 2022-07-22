import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorDto } from './dto';
import { SearchDoctorsDto } from './dto/search-doctors.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private doctorsService: DoctorsService) {}

  @Post()
  create(@Body() dto: DoctorDto) {
    return this.doctorsService.create(dto);
  }

  @Get()
  getDoctors() {
    return this.doctorsService.getDoctors();
  }

  @Patch(':id')
  updateDoctor(
    @Param('id', ParseIntPipe) doctorId: number,
    @Body() dto: DoctorDto,
  ) {
    return this.doctorsService.updateDoctor(doctorId, dto);
  }

  @Delete(':id')
  deleteDoctorById(@Param('id', ParseIntPipe) doctorId: number) {
    return this.doctorsService.deleteDoctor(doctorId);
  }

  @Post('search-doctors')
  searchDoctors(@Body() dto: SearchDoctorsDto) {
    return this.doctorsService.searchDoctors(dto);
  }
}
