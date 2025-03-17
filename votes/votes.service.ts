import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';

@Injectable()
export class VotesService {
  private votes: CreateVoteDto[] = [];

  registerVote(createVoteDto: CreateVoteDto) {
    // Verifica si el estudiante ya votó para la posición dada
    const alreadyVoted = this.votes.find(
      vote =>
        vote.studentId === createVoteDto.studentId &&
        vote.position.toLowerCase() === createVoteDto.position.toLowerCase()
    );

    if (alreadyVoted) {
      throw new ConflictException(
        `El estudiante con ID ${createVoteDto.studentId} ya votó para ${createVoteDto.position}.`
      );
    }

    this.votes.push(createVoteDto);
    return createVoteDto;
  }

  getAllVotes() {
    return this.votes;
  }

  // Puedes agregar otros métodos, por ejemplo, para buscar votos por estudiante
  getVotesByStudent(studentId: string) {
    const studentVotes = this.votes.filter(vote => vote.studentId === studentId);
    if (studentVotes.length === 0) {
      throw new NotFoundException(`No se encontraron votos para el estudiante con ID ${studentId}.`);
    }
    return studentVotes;
  }
}
