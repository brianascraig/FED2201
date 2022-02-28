import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Villain } from './villain';
import { VILLAINS } from './mock-villains';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class VillainService {

  constructor(private messageService: MessageService) { }

  getVillains(): Observable<Villain[]> {
    const villains = of(VILLAINS);
    this.messageService.add('VillainService: fetched villains');
    return villains;
  }

  getVillain(id: number): Observable<Villain> {
    const villain = VILLAINS.find(v => v.id === id)!;
    this.messageService.add(`VillainService: fetched villain id=${id}`);
    return of(villain);
  }
}