import { Component, OnInit } from '@angular/core';

import { ClowCard } from '../clow-card';
import { ClowCardService } from '../services/clow-card.service';

@Component({
  moduleId: module.id,
  selector: 'daily-reading',
  templateUrl: 'daily-reading.component.html',
  styleUrls: ['clow-card.css']
})

export class DailyReadingComponent implements OnInit {

  cards: ClowCard[] = [];
  title = 'Clow Cards Daily Reading';

  constructor(private clowCardService: ClowCardService) { }

  ngOnInit(): void {
    this.clowCardService.getClowCards().then(cards => this.cards = cards);
  }
}
