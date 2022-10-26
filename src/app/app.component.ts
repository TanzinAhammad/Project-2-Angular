import { Component, OnChanges} from '@angular/core';
import {filter} from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  route = ''
  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe(event => {
          this.route = this.router.url
      });
   }


  title = 'Angular-Basic';
}
