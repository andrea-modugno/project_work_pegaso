import { Injectable } from '@angular/core';
import { Report as ReportModel } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class Report {
  private reports: ReportModel[] = [
    {
      id: 1,
      titolo: 'Report di Sostenibilità 2023',
      anno: 2023,
      descrizione: 'Bilancio di sostenibilità del Gruppo BF per l’anno 2023.',
      fileUrl: 'https://www.bfspa.it/wp-content/uploads/2024/05/BF-Report-Sostenibilita-2023.pdf'
    },
    {
      id: 2,
      titolo: 'Report di Sostenibilità 2022',
      anno: 2022,
      descrizione: 'Bilancio di sostenibilità del Gruppo BF per l’anno 2022.',
      fileUrl: 'https://www.bfspa.it/wp-content/uploads/2023/05/BF-Report-Sostenibilita-2022.pdf'
    }
  ];

  getReports() {
    return this.reports;
  }
}
