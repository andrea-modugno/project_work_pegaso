import { Component } from '@angular/core';
import { SustainabilityIntro } from './components/sustainability-intro/sustainability-intro';
import { ReportSelector } from './components/report-selector/report-selector.component';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, SustainabilityIntro, ReportSelector, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
