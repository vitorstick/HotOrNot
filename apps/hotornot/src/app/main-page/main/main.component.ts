import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vote, Person } from '@hotornot/api-interfaces';

@Component({
  selector: 'hotornot-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public currentVote: Vote;

  private _person: Person;
  get person(): Person {
    return this._person;
  }

  @Input('person')
  set person(person: Person) {
    this._person = person;
    if (!!this._person) {
      this.currentVote = {
        personId: this._person.id,
        downvote: false,
        upvote: false
      };
    }
    // console.log('this is person', this._person);
  }

  @Output() voteEmitter = new EventEmitter<Vote>();

  constructor() {}

  ngOnInit() {}

  doVote(vote: Vote) {
    this.voteEmitter.emit(vote);
  }
}
