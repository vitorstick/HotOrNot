import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Vote, Person } from '@hotornot/api-interfaces';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'hotornot-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private personList: Person[] = [];

  public currentPerson: Person;
  public currentId: number;

  constructor(private mainService: MainService) {}

  ngOnInit() {
    // TODO: SET THE LATEST THE PERSON VISITED
    this.currentId = 0;
    this.fetchData();
  }

  doVote(vote: Vote) {
    this.mainService.addVote(vote).subscribe(voted => {
      console.log('voted', voted);
      this.setCurrentPerson(vote.personId);
    });
  }

  setCurrentPerson(personId?: number) {
    if (!personId) {
      this.currentPerson = this.personList[0];
    } else {
      const lastIndex = this.personList.findIndex(person => {
        return person.id === personId;
      });

      if (!!this.personList[lastIndex + 1]) {
        this.currentPerson = this.personList[lastIndex + 1];
      } else {
        this.fetchData();
      }
    }
  }

  private fetchData() {
    this.mainService
      .getPersons()
      .pipe()
      .subscribe(personList => {
        console.log('personList', personList);
        this.personList = personList;
        this.setCurrentPerson();
      });
  }
}
