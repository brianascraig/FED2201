import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { VillainService } from '../villain.service';
import { Villain } from '../villain';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  villains: Villain[] = [];

  constructor(private heroService: HeroService, 
    private villainService: VillainService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getVillains();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  getVillains(): void {
    this.villainService.getVillains()
      .subscribe(villains => this.villains = villains.slice(1, 5));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.heroes, event.previousIndex, event.currentIndex);
  }
}
