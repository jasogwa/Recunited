/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class SearchDoctorsDto{
    @IsString()
    city: string;
  
    @IsString()
    areaOfExpertise: string;
  
    @IsString()
    facility: string;
}