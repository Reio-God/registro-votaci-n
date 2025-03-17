import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { CandidatesService } from './candidates.service';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Post()
  register(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidatesService.registerCandidate(createCandidateDto);
  }

  @Get()
  getAll() {
    return this.candidatesService.getAllCandidates();
  }

  @Get(':candidateId')
  getCandidateById(@Param('candidateId') candidateId: string) {
    return this.candidatesService.findCandidateById(candidateId);
  }

  @Delete(':candidateId')
  remove(@Param('candidateId') candidateId: string) {
    return this.candidatesService.removeCandidate(candidateId);
  }
}
