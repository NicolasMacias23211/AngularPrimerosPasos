import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralInformationComponent } from './lateral-information.component';

describe('LateralInformationComponent', () => {
  let component: LateralInformationComponent;
  let fixture: ComponentFixture<LateralInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LateralInformationComponent]
    });
    fixture = TestBed.createComponent(LateralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
