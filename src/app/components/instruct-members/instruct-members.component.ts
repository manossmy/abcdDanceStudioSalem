import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-instruct-members',
  templateUrl: './instruct-members.component.html',
  styleUrls: ['./instruct-members.component.scss'],
})
export class InstructMembersComponent {
  @Output() enquiry = new EventEmitter();
  teamMembers: any = [
    {
      name: 'Hari_abcd',
      photo: 'assets/memberPhotos/hari.PNG',
      role: 'Choreographer',
      instaLink:'https://www.instagram.com/renivprasath_abcd?igsh=emNqaTEyaDdwNWx5'
    },
    {
      name: 'Karthik_abcd',
      photo: 'assets/memberPhotos/karthik.PNG',
      role: 'Proprietor',
      instaLink: 'https://www.instagram.com/karthik_abcd?igsh=cWc5OHp4Z3UyZHVx'
    },
    {
      name: 'Tamil_abcd',
      photo: 'assets/memberPhotos/tamil.JPG',
      role: 'Choreographer',
      instaLink:'https://www.instagram.com/tamizh_abcd?igsh=MXM0OGczYmh5d240ZQ=='
    },
  ];
  constructor(private commonService: CommonService) {}

  enquiryEvent(type: string) {
    this.enquiry.emit("ENQUIRY");
    this.commonService.getClickedEnquiry(type);
  }
}
