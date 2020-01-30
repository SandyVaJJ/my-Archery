import { Component, OnInit, Input } from '@angular/core';
import { Round } from '../round';

@Component({
  selector: 'app-round-detail',
  templateUrl: './round-detail.component.html',
  styleUrls: ['./round-detail.component.css']
})
export class RoundDetailComponent implements OnInit {

  @Input() round: Round;

  constructor() { }

  ngOnInit() {
  }

}
