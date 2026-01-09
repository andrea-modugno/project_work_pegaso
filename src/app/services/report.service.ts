import { Injectable } from '@angular/core';
import { Report as ReportModel } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class Report {
  private reports: ReportModel[] = [
  {
    "id": 1,
    "titolo": "Report di Sostenibilità 2020",
    "anno": 2020,
    "descrizione": "Bilancio di sostenibilità di Ferrari Trento per l’anno 2020.",
    "fileUrl": "https://www.ferraritrento.com/wp-content/uploads/FerrariTrento_Report_Sostenibilita_2020.pdf"
  },
  {
    "id": 2,
    "titolo": "Report di Sostenibilità 2021",
    "anno": 2021,
    "descrizione": "Bilancio di sostenibilità di Ferrari Trento per l’anno 2021.",
    "fileUrl": "https://www.ferraritrento.com/wp-content/uploads/Report-di-Sostenibilita-2021.pdf"
  },
  {
    "id": 3,
    "titolo": "Report di Sostenibilità 2022",
    "anno": 2022,
    "descrizione": "Bilancio di sostenibilità di Ferrari Trento per l’anno 2022.",
    "fileUrl": "https://www.ferraritrento.com/wp-content/uploads/Report-di-sostenibilita-Ferrari-Trento_Coltivare-eccellenza_2022.pdf?v=2"
  },
  {
    "id": 4,
    "titolo": "Report di Sostenibilità 2023",
    "anno": 2023,
    "descrizione": "Bilancio di sostenibilità di Ferrari Trento per l’anno 2023.",
    "fileUrl": "https://www.ferraritrento.com/wp-content/uploads/Report%20Gruppo%20Lunelli_Anno%202023.pdf"
  },
  {
    "id": 5,
    "titolo": "Report di Sostenibilità 2024",
    "anno": 2024,
    "descrizione": "Bilancio di sostenibilità di Ferrari Trento per l’anno 2024.",
    "fileUrl": "https://www.ferraritrento.com/wp-content/uploads/2025/12/Report-di-Sostenibilita-Gruppo-Lunelli-2024-compresso.pdf"
  }
]

  getReports() {
    return this.reports;
  }
}
