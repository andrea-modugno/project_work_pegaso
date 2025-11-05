import { Component } from '@angular/core';

@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.css']
})
export class ReportSelector {
  years = Array.from({ length: 12 }, (_, i) => 2025 - i); // 2024 → 2013
  selectedYear = 2024;

  selectYear(year: number) {
    this.selectedYear = year;
  }
}
