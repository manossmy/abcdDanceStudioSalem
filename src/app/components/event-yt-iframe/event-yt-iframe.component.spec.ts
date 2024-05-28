import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventYtIframeComponent } from './event-yt-iframe.component';

describe('EventYtIframeComponent', () => {
  let component: EventYtIframeComponent;
  let fixture: ComponentFixture<EventYtIframeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventYtIframeComponent]
    });
    fixture = TestBed.createComponent(EventYtIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
