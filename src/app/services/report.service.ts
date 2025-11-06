import { Injectable } from '@angular/core';
import { Report as ReportModel } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class Report {
  private reports: ReportModel[] = [
  {
    "id": 1,
    "titolo": "Report di Sostenibilità 2018",
    "anno": 2018,
    "descrizione": "Bilancio di sostenibilità del Gruppo BF per l’anno 2018.",
    "fileUrl": "https://www.bfspa.it/files/00232/bfbilanciosostenibilit2018definitivo.pdf"
  },
  {
    "id": 2,
    "titolo": "Report di Sostenibilità 2019",
    "anno": 2019,
    "descrizione": "Bilancio di sostenibilità del Gruppo BF per l’anno 2019.",
    "fileUrl": "https://www.bfspa.it/files/00232/bilanciodisostenibilit2019.pdf"
  },
  {
    "id": 3,
    "titolo": "Report di Sostenibilità 2020",
    "anno": 2020,
    "descrizione": "Bilancio di sostenibilità del Gruppo BF per l’anno 2020.",
    "fileUrl": "https://www.bfspa.it/files/00232/bilanciosostenibilita2020.pdf"
  },
  {
    "id": 4,
    "titolo": "Report di Sostenibilità 2021",
    "anno": 2021,
    "descrizione": "Bilancio di sostenibilità del Gruppo BF per l’anno 2021.",
    "fileUrl": "https://www.bfspa.it/files/00232/bilanciosostenibilita2021.pdf"
  },
  {
    "id": 5,
    "titolo": "Report di Sostenibilità 2022",
    "anno": 2022,
    "descrizione": "Bilancio di sostenibilità del Gruppo BF per l’anno 2022.",
    "fileUrl": "https://www.bfspa.it/files/00232/bfdnf2022.pdf"
  },
  {
    "id": 6,
    "titolo": "Report di Sostenibilità 2023",
    "anno": 2023,
    "descrizione": "Bilancio di sostenibilità del Gruppo BF per l’anno 2023.",
    "fileUrl": "https://www.bfspa.it/files/00232/9.gruppobfdnf2023.30.04.24v.definitiva.pdf"
  }
]

  getReports() {
    return this.reports;
  }
}
