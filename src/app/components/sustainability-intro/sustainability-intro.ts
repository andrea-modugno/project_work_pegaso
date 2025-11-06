import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sustainability-intro',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './sustainability-intro.html',
  styleUrls: ['./sustainability-intro.css']
})
export class SustainabilityIntro implements OnInit {

  introCards = [
    {
      title: 'Alla sostenibilità economica, in una logica di medio-lungo periodo',
      imageUrl: '/assets/images/intro-valori.png',
      type: 'image'
    },
    {
      title: 'Al rispetto dell’ambiente e del paesaggio',
      imageUrl: '/assets/images/intro-agricoltura.png',
      type: 'image'
    },
    {
      title: 'Alla gestione oculata delle risorse, a beneficio della collettività e delle generazioni future',
      imageUrl: '/assets/images/intro-foglia.png',
      type: 'image'
    },
    {
      title: 'All\'applicazione di sistemi all\'avanguardia nel campo della agricoltura di precisione, investendo in tecnologie avanzate',
      imageUrl: '/assets/images/intro-drone.png',
      type: 'image'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}