import { Component, Output, Input, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  highlightedMenu: string = 'HOME';
  @Input() navEnquiry: any;
  @Output() menuHighlight: any = new EventEmitter();
  constructor() {}

  ngOnChanges() {
    if(this.navEnquiry === 'ENQUIRY') {
      this.highlightedMenu = 'ENQUIRY';
    }
  }
  selectedMenu(selected: string) {
    if (selected === 'HOME') {
      this.highlightedMenu = selected;
    } else if (selected === 'INFO') {
      this.highlightedMenu = selected;
    } else if (selected === 'ENQUIRY') {
      this.highlightedMenu = selected;
    }
    this.menuHighlight.emit(selected);
  }
}
