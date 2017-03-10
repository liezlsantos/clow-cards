import 'rxjs/add/operator/switchMap';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClowCard } from '../clow-card';
import { ClowCardService } from '../services/clow-card.service';
export declare class ClowCardDetailComponent implements OnInit {
    private clowCardService;
    private route;
    private location;
    card: ClowCard;
    constructor(clowCardService: ClowCardService, route: ActivatedRoute, location: Location);
    ngOnInit(): void;
}
