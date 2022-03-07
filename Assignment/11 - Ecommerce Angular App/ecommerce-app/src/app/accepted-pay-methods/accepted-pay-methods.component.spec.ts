import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedPayMethodsComponent } from './accepted-pay-methods.component';

describe('AcceptedPayMethodsComponent', () => {
  let component: AcceptedPayMethodsComponent;
  let fixture: ComponentFixture<AcceptedPayMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedPayMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedPayMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
