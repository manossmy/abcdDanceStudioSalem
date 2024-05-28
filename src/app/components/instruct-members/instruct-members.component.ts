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
      role: 'Team Member',
    },
    {
      name: 'Karthik_abcd',
      photo: 'assets/memberPhotos/karthik.PNG',
      role: 'Founder',
    },
    {
      name: 'Tamil_abcd',
      photo: 'assets/memberPhotos/tamil.JPG',
      role: 'Team Member',
    },
  ];
  constructor(private commonService: CommonService) {}

  enquiryEvent(type: string) {
    this.enquiry.emit("ENQUIRY");
    this.commonService.getClickedEnquiry(type);
  }
}
