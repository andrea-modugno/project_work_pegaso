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
      title: '"Il Vino è la poesia della terra"',
      imageUrl: '/assets/images/row-territorio-cantine-ferrari.jpg',
      type: 'image'
    },
    {
      title: 'Cultura della sostenibilità e rispetto per il territorio',
      imageUrl: '/assets/images/ferrari-biologico.jpg',
      type: 'image'
    },
    {
      title: 'Coltivare il talento',
      imageUrl: '/assets/images/vigne_2.jpg',
      type: 'image'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}