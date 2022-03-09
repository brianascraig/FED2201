import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Product } from '../product';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private http: HttpClient) {}

  createAndStore(title: string, content: string) {
    const productData: Product = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
        productData
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          console.log(error.message);
        }
      );
  }

  fetchProducts() {
    return this.http
      .get<{ [key: string]: Product }>(
        'https://ng-complete-guide-c56d3.firebaseio.com/posts.json'
      )
      .pipe(
        map(responseData => {
          const productsArray: Product[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              productsArray.push({ ...responseData[key], id: key });
            }
          }
          return productsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-complete-guide-c56d3.firebaseio.com/posts.json'
    );
  }
}
