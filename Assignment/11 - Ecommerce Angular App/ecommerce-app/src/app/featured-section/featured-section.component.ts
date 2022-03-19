import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-section',
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.css']
})
export class FeaturedSectionComponent implements OnInit {
  cardTitle1: string = "Free shipping!";
  cardText1: string = "Get free shipping on all orders over $35."
  cardTitle2: string = "Parents love us";
  cardText2: string = "We make exchanges easy."
  cardTitle3: string = "Now supplying uniforms";
  cardText3: string = "Browse our school uniform collection"
  constructor() { }

  ngOnInit(): void {
  }

}
