import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  callout: string = "Shop our grand opening sale"
  constructor() { }

  ngOnInit(): void {
  }

}
