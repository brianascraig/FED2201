import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCategoriesDisplayComponent } from './sales-categories-display.component';

describe('SalesCategoriesDisplayComponent', () => {
  let component: SalesCategoriesDisplayComponent;
  let fixture: ComponentFixture<SalesCategoriesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCategoriesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCategoriesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
