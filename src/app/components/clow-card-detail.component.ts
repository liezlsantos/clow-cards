import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { ClowCard }         from '../clow-card';
import { ClowCardService }  from '../services/clow-card.service';

@Component({
  moduleId: module.id,
  selector: 'clow-card-detail',
  templateUrl: './clow-card-detail.component.html',
})
export class ClowCardDetailComponent implements OnInit {
  card: ClowCard;

  constructor(
    private clowCardService: ClowCardService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.clowCardService.getClowCard(+params['id']))
      .subscribe(card => this.card = card);
  }
}
