import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilliComponent } from './billi.component';

describe('BilliComponent', () => {
  let component: BilliComponent;
  let fixture: ComponentFixture<BilliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
