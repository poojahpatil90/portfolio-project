import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  goTo(page) {
    console.log('scroll to page ' + page);
    document.querySelector('.' + page).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
