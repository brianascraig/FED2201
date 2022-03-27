import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  id: any;
  Products: Product[] = [];
  tab1Title: string = "description"
  tab2Title: string = "care"
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("inside pdesc" + this.id)

    this.productService.fetchProducts().subscribe(
      products => {
        this.Products = products.filter(product => product.id === this.id);
      }
    );
  }


}
