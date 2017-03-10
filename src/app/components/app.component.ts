import { Component } from '@angular/core';

import { ClowCardService } from '../services/clow-card.service';

@Component({
  moduleId: module.id,
  selector: 'clow-card-fortune-telling',
  templateUrl: './app.component.html',
  providers: [ ClowCardService ]
})

export class AppComponent {
  title = 'Clow Cards Fortune Telling';
}
