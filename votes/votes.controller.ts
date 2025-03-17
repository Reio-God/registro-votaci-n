import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { VotesService } from './votes.service';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  // Endpoint para registrar un voto
  @Post()
  registerVote(@Body() createVoteDto: CreateVoteDto) {
    return this.votesService.registerVote(createVoteDto);
  }

  // Endpoint para listar todos los votos
  @Get()
  getAllVotes() {
    return this.votesService.getAllVotes();
  }

  // Endpoint opcional para obtener los votos de un estudiante en particular
  @Get('student/:studentId')
  getVotesByStudent(@Param('studentId') studentId: string) {
    return this.votesService.getVotesByStudent(studentId);
  }
}
