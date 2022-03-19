import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../gallery-items/gallery-item';
import { GalleryItemService } from '../gallery-items/gallery-item.service';

@Component({
  selector: 'app-shop-categories-gallery',
  templateUrl: './shop-categories-gallery.component.html',
  styleUrls: ['./shop-categories-gallery.component.css']
})
export class ShopCategoriesGalleryComponent implements OnInit {
  galleryItems: GalleryItem[] = [];

  constructor(private GalleryItemService: GalleryItemService) { }

  ngOnInit(): void {
    this.getGalleryItems();
  }

  getGalleryItems(): void {
    this.GalleryItemService.getGalleryItems()
      .subscribe(galleryItems => this.galleryItems = galleryItems.slice(4, 10));
  }

}
