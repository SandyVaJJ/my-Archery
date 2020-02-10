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
  constructor(private roundService: RoundService) { }

  rounds: Round[];

  ngOnInit() {
    this.getRounds();
  }

  getRounds(): void {
    this.roundService.getRounds()
      .subscribe(rounds => this.rounds = rounds);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return; }
    this.roundService.addRound({name} as Round)
      .subscribe(round => {this.rounds.push(round);
      });
  }

  delete(round: Round): void {
    this.rounds = this.rounds.filter(r => r !== round);
    this.roundService.deleteRound(round).subscribe();
  }
}
