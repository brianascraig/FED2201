import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-image-gallery',
  templateUrl: './product-image-gallery.component.html',
  styleUrls: ['./product-image-gallery.component.css']
})
export class ProductImageGalleryComponent implements OnInit {
  Products: Product[] = [];
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("inside pimg gallery" + this.id)

    this.productService.fetchProducts().subscribe(
      products => {
        this.Products = products.filter(product => product.id === this.id);
      }
    );
  }

}
