import { Component, OnInit } from '@angular/core';
import { Round } from "../round";
import { RoundService } from "../round.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rounds: Round[]=[];

  constructor(private roundService: RoundService) { }

  ngOnInit() {
    this.getRounds();
  }

  getRounds(): void{
    this.roundService.getRounds().subscribe(rounds => this.rounds = rounds.slice(1, 5));
  }
}
