import { Component } from '@angular/core';
import { ReportSelector } from './components/report-selector/report-selector.component';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ReportSelector, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
