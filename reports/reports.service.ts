import { Injectable } from '@nestjs/common';
import { VotesService } from '../votes/votes.service';

@Injectable()
export class ReportsService {
  constructor(private readonly votesService: VotesService) {}

  generateReport() {
    // Obtener todos los votos
    const votes = this.votesService.getAllVotes();
    const report = {};

    // Agrupar los votos por posición y número de tarjetón
    votes.forEach(vote => {
      const position = vote.position;
      const ballotNumber = vote.ballotNumber;

      if (!report[position]) {
        report[position] = {};
      }
      if (!report[position][ballotNumber]) {
        report[position][ballotNumber] = 0;
      }
      report[position][ballotNumber] += 1;
    });

    return report;
  }
}
