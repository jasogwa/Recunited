/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';

enum AreaOfExpertise {
  Allergy = 'Allergy and Immunology', 
  Anesthesiology = 'Anesthesiology', 
  Colon  = 'Colon and Rectal Surgery', 
  Dermatology = 'Dermatology',
  Emergency = 'Emergency Medicine',
}

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

  @IsEnum(AreaOfExpertise)
  areaOfExpertise: AreaOfExpertise;

  @IsString()
  facility: string;
}

