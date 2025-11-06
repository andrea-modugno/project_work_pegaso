import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, Renderer2 } from '@angular/core';
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

  private allReports: ReportModel[] = []; // Conterrà i dati del servizio
  displayYears: number[] = [];            // Anni da mostrare nella UI
  selectedYear: number;                   // Solo l'anno selezionato
  selectedReport: ReportModel | undefined; // Il report Trovato (o undefined)
  
  private currentYear = new Date().getFullYear();

  constructor(private reportService: Report, private renderer: Renderer2) {
    // Imposta l'anno corrente come predefinito
    this.selectedYear = this.currentYear; 
  }

  ngOnInit() {
    // 1. Carica i dati
    this.allReports = this.reportService.getReports();

    // 2. Genera l'array di anni da mostrare
    const startYear = this.allReports[0]?.anno || this.currentYear - 5;
    this.displayYears = this.generateYearArray(startYear, this.currentYear);

    // 3. Controlla subito se il report per l'anno predefinito esiste
    this.selectedReport = this.allReports.find(
      report => report.anno === this.selectedYear
    );
  }

  // Genera l'elenco di anni
  private generateYearArray(start: number, end: number): number[] {
    const years = [];
    for (let y = start; y <= end; y++) {
      years.push(y);
    }
    return years;
  }

  ngAfterViewInit() {
    const container = this.yearSelector.nativeElement;

    setTimeout(() => {
      this.scrollToSelectedYear();
      this.updateFadeShadows();
    }, 100);

    // Aggiorna le ombre durante lo scroll
    container.addEventListener('scroll', () => this.updateFadeShadows());
  }

  selectYear(year: number) {
    this.selectedYear = year;

    // Controlla se esiste un report per l’anno cliccato
    this.selectedReport = this.allReports.find(
      report => report.anno === year
    );

    this.scrollToSelectedYear();
  }

  private scrollToSelectedYear() {
    const container = this.yearSelector.nativeElement;
    const buttons = container.querySelectorAll('button');
    
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

  // 🔥 Migliorata: controlla posizione e mostra/nasconde le ombre ai lati
  private updateFadeShadows() {
    const container = this.yearSelector.nativeElement;
    const parent = container.closest('.overflow-hidden');
    if (!parent) return;

    const isAtStart = container.scrollLeft <= 5;
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;

    if (isAtStart) {
      this.renderer.addClass(parent, 'start');
    } else {
      this.renderer.removeClass(parent, 'start');
    }

    if (isAtEnd) {
      this.renderer.addClass(parent, 'end');
    } else {
      this.renderer.removeClass(parent, 'end');
    }
  }
}
