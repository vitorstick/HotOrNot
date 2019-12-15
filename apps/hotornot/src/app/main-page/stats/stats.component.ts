import { Component, OnInit, Input } from '@angular/core';
import { Person } from '@hotornot/api-interfaces';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hotornot-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  public faThumbsDown = faThumbsDown;
  public faThumbsUp = faThumbsUp;

  private _person: Person;
  get person(): Person {
    return this._person;
  }

  @Input('person')
  set person(person: Person) {
    this._person = person;
  }

  constructor() {}

  ngOnInit() {}
}
