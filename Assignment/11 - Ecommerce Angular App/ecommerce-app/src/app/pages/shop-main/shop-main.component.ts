import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';


@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {
  Products: Product[] = [];

  constructor(private http: HttpClient, private productService: ProductService) {}

  ngOnInit() {
    this.productService.fetchProducts().subscribe(
      products => {
        this.Products = products;
      }
    );
  }

  onFetchPosts() {
    this.productService.fetchProducts().subscribe(
      products => {
        this.Products = products;
      }
    );
  }


}