import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vote, Person } from '@hotornot/api-interfaces';

@Component({
  selector: 'hotornot-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('hotornot') public hotbutton = true;
  @Input('vote') private vote: Vote;
  @Output() voteEmitter = new EventEmitter<Vote>();

  constructor() {}

  ngOnInit() {}

  public hotClick() {
    this.vote.upvote = true;
    this.vote.downvote = false;
    this.voteEmitter.emit(this.vote);
  }

  public notClick() {
    this.vote.upvote = false;
    this.vote.downvote = true;
    this.voteEmitter.emit(this.vote);
  }
}
