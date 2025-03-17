import { IsString, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';

export enum CandidatePosition {
  PERSONERO = 'Personero',
  CONTADOR = 'Contador',
  REPRESENTANTE = 'Representante',
}

export class CreateCandidateDto {
  @IsString()
  @IsNotEmpty()
  candidateId: string;

  @IsString()
  @IsNotEmpty()
  userId: string; // Relaciona el candidato con un usuario registrado

  @IsEnum(CandidatePosition)
  position: CandidatePosition;

  @IsNumber()
  @IsNotEmpty()
  ballotNumber: number;
}
