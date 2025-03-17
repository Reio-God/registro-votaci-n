import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { VotesModule } from '../votes/votes.module';  // Asegúrate de que la ruta sea correcta

@Module({
  imports: [VotesModule],  // Importamos el módulo que exporta VotesService
  providers: [ReportsService],
  controllers: [ReportsController],
})
export class ReportsModule {}
