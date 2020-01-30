import { Component, OnInit } from '@angular/core';
import { Round } from '../round';
import { ROUNDS } from '../mock-rounds';
import { RoundService } from '../round.service';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  rounds: Round[];

  selectedRound: Round;
  onSelect(round: Round): void {
    this.selectedRound = round;
  }

  getRounds(): void {
    this.roundService.getRounds()
      .subscribe(rounds => this.rounds = rounds);
  }

  constructor(private roundService: RoundService) { }

  ngOnInit() {
    this.getRounds();
  }

}
