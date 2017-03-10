import { ClowCard } from '../clow-card';
import { CLOW_CARDS } from '../clow-card-list';
import { Injectable } from '@angular/core';

@Injectable()
export class ClowCardService {
  getClowCards(): Promise<ClowCard[]> {
    return Promise.resolve(this.shuffle(CLOW_CARDS));
  }

  getClowCard(id: number): Promise<ClowCard> {
    return this.getClowCards()
      .then(cards => cards.find(card => card.id === id));
  }

  private shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

}
