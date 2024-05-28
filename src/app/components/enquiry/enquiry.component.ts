import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CommonService } from '../../common.service';

import { environment } from '../../../environments/environment';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss'],
})
export class EnquiryComponent implements OnInit, OnChanges {
  formDetails: FormGroup;
  currentDate: any = new Date().toISOString().split('T')[0];
  envDetails: any = {
    serviceId: environment.service_id,
    tempId: environment.template_id,
    pubKey: environment.public_key,
  };
  enquiryClicked: any = '';

  constructor(private fb: FormBuilder, private commonService: CommonService) {
    this.formDetails = this.fb.group({
      enquirer_name: ['', Validators.required],
      enquirer_message: ['', Validators.required],
      enquirer_place: ['', Validators.required],
      enquirer_contact_number: ['', Validators.required],
      enquirer_event_date: ['', Validators.required],
    });
    this.commonService.clickedEnquiry.subscribe((evnt: any) => {
      this.enquiryClicked = evnt;
    })
  }

  get enquirer_name() { 
    const faa = this.formDetails.get('enquirer_name'); 
    return faa;
  }

  ngOnInit() {
    // this.envDetails = {
    //   serviceId: environment.service_id,
    //   tempId: environment.template_id,
    //   pubKey: environment.public_key,
    // };
  }

  ngOnChanges() {
    // console.log(this.enquiryClicked, 'enquiryClicked');
    // if(this.enquiryClicked)
  }
  ngOnDestroy() {
    this.formDetails.reset();
    this.commonService.getClickedEnquiry('');
  }

  sendEnquiryEmail() {
    // console.log(this.formDetails.value, 'formDetails');
    // emailjs.init(this.envDetails.pubKey);
    emailjs
      .send(
        this.envDetails.serviceId,
        this.envDetails.tempId,
        this.formDetails.value
      )
      .then(
        (response) => {
          alert('Submitted successfully');
          this.formDetails.reset();
        },
        (error) => {
          alert('Failed, Please try again later...');
        }
      );
  }
}
