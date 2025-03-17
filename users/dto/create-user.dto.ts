import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  course: string; // Campo que indica el curso del estudiante

  @IsString()
  @IsNotEmpty()
  photo: string; // Por ahora se maneja como texto, luego se puede actualizar a otro tipo
}
