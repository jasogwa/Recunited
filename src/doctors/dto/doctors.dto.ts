/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class DoctorDto {

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  city: string;

  @IsString()
  areaOfExpertise: string;

  @IsString()
  facility: string;
}
