import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, Vote, Person } from '@hotornot/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  persons: Person[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  getMessage(): Observable<Message> {
    return this.http.get<Message>('/api/hello');
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>('/api/persons');
  }

  fetch() {
    this.http.get<Person[]>('/api/persons').subscribe(t => (this.persons = t));
  }

  addVote(vote: Vote): Observable<Person> {
    return this.http.post<Person>('/api/addVote', { vote });
  }
}
