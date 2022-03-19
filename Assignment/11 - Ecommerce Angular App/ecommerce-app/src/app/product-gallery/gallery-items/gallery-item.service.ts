import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GalleryItem } from './gallery-item';
import { GalleryItems } from './gallery-items';

@Injectable({
  providedIn: 'root'
})
export class GalleryItemService {

  constructor() { }

  getGalleryItems(): Observable<GalleryItem[]> {
    const galleryItems = of(GalleryItems);
    return galleryItems;
  }
}
