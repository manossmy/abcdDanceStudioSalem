import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  clickedEnquiry: any = new BehaviorSubject('');
  constructor() {}

  getClickedEnquiry(type: any) {
    this.clickedEnquiry.next(type);
  }
}
