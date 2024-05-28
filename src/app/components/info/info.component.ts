import { Component, AfterViewInit , Input } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements AfterViewInit  {
  @Input() highLightedTab: any;
  teamMemberDetails: any = [
    {
      name: 'Kathik',
      photo: 'assets/memberPhotos/karthik.PNG',
      instaLink: 'https://www.instagram.com/karthik_abcd?igsh=cWc5OHp4Z3UyZHVx',
      tooltip: 'karthik_abcd',
    },
    {
      name: 'Hari',
      photo: 'assets/memberPhotos/hari.PNG',
      instaLink:
        'https://www.instagram.com/renivprasath_abcd?igsh=emNqaTEyaDdwNWx5',
      tooltip: 'renivprasath_abcd',
    },
    {
      name: 'Tamil',
      photo: 'assets/memberPhotos/tamil.JPG',
      instaLink:
        'https://www.instagram.com/tamizh_abcd?igsh=MXM0OGczYmh5d240ZQ==',
      tooltip: 'tamizh_abcd',
    },
    {
      name: 'Justin',
      photo: 'assets/memberPhotos/justinAbcd.PNG',
      instaLink: 'https://www.instagram.com/justy_abcd?igsh=OXZyMGl1bWxocHEw',
      tooltip: 'justy_abcd',
    },
    {
      name: 'Gokul',
      photo: 'assets/memberPhotos/gokulAbcd.PNG',
      instaLink:
        'https://www.instagram.com/gokulzz_abcd?igsh=MTQ1dGplOTc5bGtxYg==',
      tooltip: 'gokulzz_abcd',
    },
    {
      name: 'Ganesh',
      photo: 'assets/memberPhotos/ganeshAbcd.PNG',
      instaLink:
        'https://www.instagram.com/_visioncruze_?igsh=MWtybTYwYWhyN2gxOQ==',
      tooltip: '_visioncruze_',
    },
    {
      name: 'Kamalesh',
      photo: 'assets/memberPhotos/kamaleshAbcd.PNG',
      instaLink:
        'https://www.instagram.com/kamalesh_abcd?igsh=cTlqcWo5Z2NndGZz',
      tooltip: 'kamalesh_abcd',
    },
    {
      name: 'Vetri',
      photo: 'assets/memberPhotos/vetriAbcd.PNG',
      instaLink: 'https://www.instagram.com/vetri_abcd?igsh=c2dqMDUzNGVzZm1v',
      tooltip: 'vetri_abcd',
    },
    {
      name: 'Karthik Raja',
      photo: 'assets/memberPhotos/karthikrajaAbcd.PNG',
      instaLink:
        'https://www.instagram.com/karthik_raja_abcd?igsh=YWdiemUwMWxibGVp',
      tooltip: 'karthik_raja_abcd',
    },
  ];
  constructor() {}

  ngAfterViewInit(): void {
    if (this.highLightedTab === 'INFO') {
      var myCarousel = document.querySelector('#carouselExampleFade');
      var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        ride: 'carousel'
      });
    }
  }
}
