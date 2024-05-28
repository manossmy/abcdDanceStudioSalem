import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  highlighted: string = 'HOME';
  enquiryClicked: any;

  constructor() {}

  ngOnInit() {}

  getMenuHighlighted(navHighlight: any) {
    this.highlighted = navHighlight;
  }

  clickedEnquiry(clicked: any) {
    this.enquiryClicked = clicked;
  }
}
