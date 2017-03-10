import { OnInit } from '@angular/core';
import { ClowCard } from '../clow-card';
import { ClowCardService } from '../services/clow-card.service';
export declare class DailyReadingComponent implements OnInit {
    private clowCardService;
    cards: ClowCard[];
    title: string;
    constructor(clowCardService: ClowCardService);
    ngOnInit(): void;
}
