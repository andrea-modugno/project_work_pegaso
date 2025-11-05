import { Component } from '@angular/core';
import { ReportList } from './components/report-list/report-list.component';
import { ReportSelector } from './components/report-selector/report-selector.component';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ReportList, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
