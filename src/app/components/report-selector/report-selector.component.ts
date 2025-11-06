import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa il tuo modello e il tuo servizio
import { Report as ReportModel } from '../../models/report.model';
import { Report } from '../../services/report.service'; // Questo è il tuo servizio

@Component({
  selector: 'app-report-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.css']
})
export class ReportSelector implements AfterViewInit, OnInit {
  @ViewChild('yearSelector', { static: true }) yearSelector!: ElementRef<HTMLDivElement>;

  // 1. Proprietà aggiornate
  private allReports: ReportModel[] = []; // Conterrà i dati del servizio
  displayYears: number[] = [];            // Anni da mostrare nella UI
  selectedYear: number;                   // Solo l'anno selezionato
  selectedReport: ReportModel | undefined; // Il report Trovato (o undefined)
  
  private currentYear = new Date().getFullYear();

  constructor(private reportService: Report) {
    // Imposta l'anno corrente come predefinito
    this.selectedYear = this.currentYear; 
  }

  ngOnInit() {
    // 2. Carica i dati
    this.allReports = this.reportService.getReports();

    // 3. Genera l'array di anni da mostrare
    // Prende l'anno più vecchio (2018) e va fino all'anno corrente (es. 2025)
    const startYear = this.allReports[0]?.anno || this.currentYear - 5; // Usa 2018 o un fallback
    this.displayYears = this.generateYearArray(startYear, this.currentYear);

    // 4. Controlla subito se il report per l'anno predefinito (corrente) esiste
    this.selectedReport = this.allReports.find(
      report => report.anno === this.selectedYear
    );
  }

  // Funzione helper per creare l'array di anni
  private generateYearArray(start: number, end: number): number[] {
    const years = [];
    for (let y = start; y <= end; y++) {
      years.push(y);
    }
    return years;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollToSelectedYear();
      this.updateFadeShadows();
    }, 100);

    this.yearSelector.nativeElement.addEventListener('scroll', () => this.updateFadeShadows());
  }

  // 5. Logica di selezione aggiornata
  selectYear(year: number) {
    this.selectedYear = year;
    
    // Controlla se esiste un report per l'anno cliccato
    this.selectedReport = this.allReports.find(
      report => report.anno === year
    );

    // Esegui lo scroll
    this.scrollToSelectedYear();
  }

  private scrollToSelectedYear() {
    const container = this.yearSelector.nativeElement;
    const buttons = container.querySelectorAll('button');
    
    // Trova il pulsante in base al 'selectedYear' (numero)
    const activeButton = Array.from(buttons).find(
      (btn) => parseInt(btn.textContent || '', 10) === this.selectedYear
    );

    if (activeButton) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      const offset =
        buttonRect.left - containerRect.left - containerRect.width / 2 + buttonRect.width / 2;

      container.scrollBy({ left: offset, behavior: 'smooth' });
      setTimeout(() => this.updateFadeShadows(), 400);
    }
  }

  private updateFadeShadows() {
    // Il tuo codice per le ombre va bene
    const container = this.yearSelector.nativeElement;
    const parent = container.closest('.overflow-hidden');
    if (!parent) return;
    const atStart = container.scrollLeft <= 5;
    const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;
    parent.classList.toggle('start', atStart);
    parent.classList.toggle('end', atEnd);
  }
}