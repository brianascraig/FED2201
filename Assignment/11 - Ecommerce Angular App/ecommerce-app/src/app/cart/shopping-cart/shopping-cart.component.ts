import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';
import { ShoppingCartItem } from '../shopping-cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  sub: Subscription | undefined;
  Products: Product[] = [];
  ShoppingCartItems: ShoppingCartItem[] = [];
  id: string | null | undefined;
  product: any;

  constructor(private http: HttpClient, private productService: ProductService, 
    private activatedRoute: ActivatedRoute, private router: Router) {}
    
  ngOnInit() {
  //   this.productService.fetchProducts().subscribe(
  //     products => {
  //       this.Products = products.filter(product => product.id === )
  //     }
  //   );
  // }

  
  // onFetchProducts() {
  //   this.productService.fetchProducts().subscribe(
  //     products => {
  //       this.Products = products;
  //     }
  //   );
  }


}
