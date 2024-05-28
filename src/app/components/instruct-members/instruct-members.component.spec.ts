import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructMembersComponent } from './instruct-members.component';

describe('InstructMembersComponent', () => {
  let component: InstructMembersComponent;
  let fixture: ComponentFixture<InstructMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructMembersComponent]
    });
    fixture = TestBed.createComponent(InstructMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
