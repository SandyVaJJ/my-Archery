import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Round } from './round';
import { ROUNDS } from './mock-rounds';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  constructor(private messageService: MessageService) { }

  getRounds(): Observable<Round[]> {
    // TODO: send the message _after_ fetching the rounds
    this.messageService.add('RoundService: fetched rounds');
    return of(ROUNDS);
  }

  getRound(id: number): Observable<Round> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`RoundService: fetched round id=${id}`);
    return of(ROUNDS.find(round => round.id === id));
  }

}
