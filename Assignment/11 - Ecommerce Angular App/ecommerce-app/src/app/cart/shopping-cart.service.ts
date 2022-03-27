import { Injectable } from '@angular/core';
import { ShoppingCartItem } from './shopping-cart-item';
import { ShoppingCartItems } from './shopping-cart-items';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }
  addShoppingCartItem(
    quantity: number,
    productID: string,
    img: string,
    price: string,
    priceTotal: string
  ) {
    const shoppingCartItemData: ShoppingCartItem = {
      quantity: quantity,
      productID: productID,
      img: img,
      price: price,
      priceTotal: priceTotal
    };
    ShoppingCartItems.push(shoppingCartItemData)
  }
}
