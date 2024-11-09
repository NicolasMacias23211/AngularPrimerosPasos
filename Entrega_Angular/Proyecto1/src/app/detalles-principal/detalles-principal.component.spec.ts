import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPrincipalComponent } from './detalles-principal.component';

describe('DetallesPrincipalComponent', () => {
  let component: DetallesPrincipalComponent;
  let fixture: ComponentFixture<DetallesPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPrincipalComponent]
    });
    fixture = TestBed.createComponent(DetallesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
