import { Injectable } from '@angular/core';
import { Round } from './round';
import { ROUNDS } from './mock-rounds';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  getRounds(): Observable<Round[]> {
    this.messageService.add('RoundService: fetched rounds');
    return of(ROUNDS);
  }

  constructor(private messageService: MessageService) { }
}
