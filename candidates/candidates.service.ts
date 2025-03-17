import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateCandidateDto, CandidatePosition } from './dto/create-candidate.dto';

@Injectable()
export class CandidatesService {
  private candidates: CreateCandidateDto[] = [];

  registerCandidate(createCandidateDto: CreateCandidateDto) {
    const exists = this.candidates.find(
      candidate => candidate.candidateId === createCandidateDto.candidateId,
    );
    if (exists) {
      throw new ConflictException('El candidato ya está registrado.');
    }
    this.candidates.push(createCandidateDto);
    return createCandidateDto;
  }

  getAllCandidates() {
    return this.candidates;
  }

  findCandidateById(candidateId: string) {
    const candidate = this.candidates.find(candidate => candidate.candidateId === candidateId);
    if (!candidate) {
      throw new NotFoundException(`Candidato con ID ${candidateId} no encontrado.`);
    }
    return candidate;
  }

  removeCandidate(candidateId: string) {
    const index = this.candidates.findIndex(candidate => candidate.candidateId === candidateId);
    if (index === -1) {
      throw new NotFoundException(`Candidato con ID ${candidateId} no encontrado.`);
    }
    const removed = this.candidates.splice(index, 1);
    return removed[0];
  }

  // Se puede agregar método para actualizar candidato si se requiere
}
