import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageName } from '../shared/page-name.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true; // hide collapsable menu by default on mobile
  @Input() selectedPage: PageName;
  @Output() pageChange = new EventEmitter<string>();

  onSelectPage(pageName: PageName) {
    this.pageChange.emit(pageName);
  }
}
