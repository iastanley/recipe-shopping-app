import { Component } from '@angular/core';
import { PageName } from './shared/page-name.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageDisplayed: PageName = 'recipes';

  setPageDisplayed(pageName: PageName) {
    this.pageDisplayed = pageName;
  }
}
