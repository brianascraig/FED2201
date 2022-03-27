import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.css']
})
export class SingleProductPageComponent implements OnInit {
  id: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

}
