import { TestBed } from '@angular/core/testing';

import { GalleryItemService } from './gallery-item.service';

describe('GalleryItemService', () => {
  let service: GalleryItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
