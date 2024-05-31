import { Component, AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-scrollable-banner',
  templateUrl: './scrollable-banner.component.html',
  styleUrls: ['./scrollable-banner.component.scss']
})
export class ScrollableBannerComponent implements AfterViewInit {

  ngAfterViewInit(): void {
      var myCarousel = document.querySelector('#carouselExampleFade');
      var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        ride: 'carousel'
      });
  }

}
