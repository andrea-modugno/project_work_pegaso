import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.css']
})
export class ReportSelector implements AfterViewInit {
  @ViewChild('yearSelector', { static: true }) yearSelector!: ElementRef<HTMLDivElement>;

  years = Array.from({ length: 15 }, (_, i) => 2010 + i);
  selectedYear = 2024;

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollToSelectedYear();
      this.updateFadeShadows();
    }, 100);

    // aggiorna le ombre quando si scrolla
    this.yearSelector.nativeElement.addEventListener('scroll', () => this.updateFadeShadows());
  }

  selectYear(year: number) {
    this.selectedYear = year;
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

      // aggiorna le ombre dopo lo scroll
      setTimeout(() => this.updateFadeShadows(), 400);
    }
  }

  private updateFadeShadows() {
    const container = this.yearSelector.nativeElement;
    const parent = container.closest('.overflow-hidden');

    if (!parent) return;

    const atStart = container.scrollLeft <= 5;
    const atEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;

    if (atStart) {
      parent.classList.add('start');
    } else {
      parent.classList.remove('start');
    }

    if (atEnd) {
      parent.classList.add('end');
    } else {
      parent.classList.remove('end');
    }
  }

  getReportUrl(): string {
    return `https://www.bfspa.it/media/reports/report-sostenibilita-${this.selectedYear}.pdf`;
  }
}
