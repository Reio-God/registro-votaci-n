import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVoteDto {
  @IsString()
  @IsNotEmpty()
  studentId: string;

  @IsString()
  @IsNotEmpty()
  position: string; // Ejemplo: "Personero", "Contador", "Representante"

  @IsNumber()
  @IsNotEmpty()
  ballotNumber: number;
}
