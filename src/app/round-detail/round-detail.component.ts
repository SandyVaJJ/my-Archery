import { Component, OnInit, Input } from '@angular/core';
import { Round } from '../round';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { RoundService } from "../round.service";


@Component({
  selector: 'app-round-detail',
  templateUrl: './round-detail.component.html',
  styleUrls: ['./round-detail.component.css']
})
export class RoundDetailComponent implements OnInit {

  @Input() round: Round;

  constructor(
    private route: ActivatedRoute,
    private roundService: RoundService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRound();
  }

  getRound(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.roundService.getRound
      .subscribe(round => this.round = round);

  }
}
