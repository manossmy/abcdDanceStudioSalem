import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableBannerComponent } from './scrollable-banner.component';

describe('ScrollableBannerComponent', () => {
  let component: ScrollableBannerComponent;
  let fixture: ComponentFixture<ScrollableBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollableBannerComponent]
    });
    fixture = TestBed.createComponent(ScrollableBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
