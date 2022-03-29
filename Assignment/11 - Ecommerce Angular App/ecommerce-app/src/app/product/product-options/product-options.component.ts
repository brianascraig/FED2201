import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartItems } from 'src/app/cart/shopping-cart-items';
import { ShoppingCartService } from 'src/app/cart/shopping-cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.css']
})
export class ProductOptionsComponent implements OnInit {
  Products: Product[] = []
  id: any;
  itemQuantity: any = [];
  count: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, 
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("inside p-options" + this.id)

    this.productService.fetchProducts().subscribe(
      products => {
        this.Products = products.filter(product => product.id === this.id);
      }
    );


  }
  addNewItem(this: any) : any {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.shoppingCartService.addItem(1);
    // let count = this.shoppingCartService.count.length
    // let productID = this.id;
    // let img = this.products[0].img;
    // let price = this.products[0].price;
    // let priceTotal = price * count;
    // console.log("count= " + count)
    // this.shoppingCartService.createShoppingCartItem(count,
    //     productID,
    //     img,
    //     price,
    //     priceTotal)
    // console.log(ShoppingCartItems)

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.shoppingCartService.addItem(1);
    console.log("this.id" + this.id)
    let count = this.shoppingCartService.count.length
    let productId = this.id;
    let existingKeys = [];
    console.log("count= " + count)
    for (var key in ShoppingCartItems){
      
      if (ShoppingCartItems[key].productID == this.id){
        existingKeys.push(ShoppingCartItems[key])
      }
    }
    if (existingKeys.length == 0){
      this.shoppingCartService.createShoppingCartItem(count,
          productId)
    }
      else if(existingKeys.length > 0){
        for (var key in ShoppingCartItems){
          if (ShoppingCartItems[key].productID == this.id){
            ShoppingCartItems[key].quantity = count;
            console.log("ShoppingCartItems" + ShoppingCartItems)
      }
      console.log(ShoppingCartItems)
    }
    console.log(ShoppingCartItems)
  }
  }
 
}



