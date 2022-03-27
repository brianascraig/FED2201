import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn, Subscription } from 'rxjs';


@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {
sub: Subscription | undefined;
  Products: Product[] = [];
  id: string | null | undefined;
  product: any;

  constructor(private http: HttpClient, private productService: ProductService, 
    private activatedRoute: ActivatedRoute, private router: Router) {}
    
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("inside pimg gallery" + this.id)


    this.productService.fetchProducts().subscribe(
      products => {
        this.Products = products;
      }
    );
  }

  onFetchProductsByType(type: string){
    this.productService.fetchProductsByType(type).subscribe(
      products => {
        this.Products = products;
      }
    );
  }

  onFetchProducts() {
    this.productService.fetchProducts().subscribe(
      products => {
        this.Products = products;
      }
    );
  }


}