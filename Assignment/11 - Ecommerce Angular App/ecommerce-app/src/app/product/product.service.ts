import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Product } from './product';
// import { stringify } from 'querystring';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  createProduct(
    id: string,
    name: string,
    color: string,
    img: string,
    inventory: number,
    price: number,
    type: string,
    alt: string,
    description: string,
    care: string,
    detail: string,
    sizes: string,
    returns: string
  ) {
    const productData: Product = {
      id: id,
      name: name,
      color: color,
      img: img,
      inventory: inventory,
      price: price,
      type: type,
      alt: alt,
      description: description,
      care: care,
      detail: detail,
      sizes: sizes,
      returns: returns
    };
    this.http
      .post<{ name: string }>(
        'https://tiny-threads-db-default-rtdb.firebaseio.com/products.json',
        productData
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }

  fetchProducts() {
    let products:Product[];
    return this.http
      .get<{ [key: string]: Product }>(
        'https://tiny-threads-db-default-rtdb.firebaseio.com/products.json'
      )
      .pipe(
        map((responseData) => {
          const productsArray: Product[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              productsArray.push({ ...responseData[key], id: key });
            }
          }
          console.log('fetch products array: ' + productsArray);
          return productsArray;
        })
      );
  }

  fetchProductsByType(type: string) {
    return this.http
      .get<{ [key: string]: Product }>(
        'https://tiny-threads-db-default-rtdb.firebaseio.com/products.json'
      )
      .pipe(
        map((responseData) => {
          const productsArray: Product[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              if (type == responseData[key].type) {
                productsArray.push({ ...responseData[key], id: key });
              }
            }
          }
          console.log('fetch products array: ' + productsArray);
          return productsArray;
        })
      );
  }


  fetchProductById(id: string) {
    let products:Product[];
    return this.http
      .get<{ [key: string]: Product }>(
        'https://tiny-threads-db-default-rtdb.firebaseio.com/products.json'
      )
      .pipe(
        map((responseData) => {
          const productsArray: Product[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              if (id == responseData[key].id){
              productsArray.push({ ...responseData[key], id: key });
            }}
          }
          console.log('fetch products array: ' + productsArray);
          return productsArray;
        })
      );
  }

  deleteProducts() {
    return this.http.delete(
      'https://tiny-threads-db-default-rtdb.firebaseio.com/products.json'
    );
  }

  deleteProductById(id: string) {
    return this.http.delete(
      `https://tiny-threads-db-default-rtdb.firebaseio.com/products/${id}.json`
    );
  }
}
