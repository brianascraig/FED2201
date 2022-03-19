import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCategoriesGalleryComponent } from './shop-categories-gallery.component';

describe('ShopCategoriesGalleryComponent', () => {
  let component: ShopCategoriesGalleryComponent;
  let fixture: ComponentFixture<ShopCategoriesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCategoriesGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCategoriesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
