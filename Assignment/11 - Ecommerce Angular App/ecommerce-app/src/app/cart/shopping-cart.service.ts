import { Injectable } from '@angular/core';
import { ShoppingCartItem } from './shopping-cart-item';
import { ShoppingCartItems } from './shopping-cart-items';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }
  createShoppingCartItem(
    quantity: number,
    productID: string
  ) {
    const shoppingCartItemData: ShoppingCartItem = {
      quantity: quantity,
      productID: productID
    };
    ShoppingCartItems.push(shoppingCartItemData)
  }

  count: number[] = [];

  addItem(count: number) {
    this.count.push(count);
  }

}
