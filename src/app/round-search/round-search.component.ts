import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Round } from '../round';
import { RoundService } from '../round.service';

@Component({
  selector: 'app-round-search',
  templateUrl: './round-search.component.html',
  styleUrls: ['./round-search.component.css']
})
export class RoundSearchComponent implements OnInit {
  rounds$: Observable<Round[]>;
  private searchTerms = new Subject<string>();

  constructor(private roundService: RoundService) { }

  // Push a searcg term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.rounds$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.roundService.searchRounds(term)),
    );
  }
}
