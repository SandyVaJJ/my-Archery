import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Round } from './round';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rounds = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {rounds};
  }

  // Overrides the genId method to ensure that a round always has an id.
  // If the rounds array is empty,
  // the method below returns the initial number (11).
  // if the rounds array is not empty, the method below returns the highest
  // round id + 1.
  genId(rounds: Round[]): number {
    return rounds.length > 0 ? Math.max(...rounds.map(round => round.id)) + 1 : 11;
  }

}
