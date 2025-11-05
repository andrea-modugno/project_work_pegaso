import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Report } from '../../services/report.service';
import { Report as ReportModel } from '../../models/report.model';

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportList {
  reports: ReportModel[] = [];

  constructor(private reportService: Report) {
    this.reports = this.reportService.getReports();
  }
}
