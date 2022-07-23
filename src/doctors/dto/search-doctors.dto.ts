/* eslint-disable prettier/prettier */
import {  IsString, IsEnum } from 'class-validator';

enum AreaOfExpertise {
    Allergy = 'Allergy and Immunology', 
    Anesthesiology = 'Anesthesiology', 
    Colon  = 'Colon and Rectal Surgery', 
    Dermatology = 'Dermatology',
    Emergency = 'Emergency Medicine',
}

export class SearchDoctorsDto{
    @IsString()
    city: string;
  
    @IsEnum(AreaOfExpertise)
    areaOfExpertise: AreaOfExpertise;
  
    @IsString()
    facility: string;
}