import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../gallery-items/gallery-item';
import { GalleryItemService } from '../gallery-items/gallery-item.service';

@Component({
  selector: 'app-sales-categories-display',
  templateUrl: './sales-categories-display.component.html',
  styleUrls: ['./sales-categories-display.component.css']
})
export class SalesCategoriesDisplayComponent implements OnInit {
  galleryItems: GalleryItem[] = [];

  constructor(private GalleryItemService: GalleryItemService) { }

  ngOnInit(): void {
    this.getGalleryItems();
  }

  getGalleryItems(): void {
    this.GalleryItemService.getGalleryItems()
      .subscribe(galleryItems => this.galleryItems = galleryItems.slice(0,4));
  }
}
