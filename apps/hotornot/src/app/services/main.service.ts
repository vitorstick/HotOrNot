import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, Vote, Person } from '@hotornot/api-interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  persons: Person[] = [];

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.fetch();
  }

  getMessage(): Observable<Message> {
    return this.http.get<Message>(this.baseUrl + '/api/hello');
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl + '/api/persons');
  }

  fetch() {
    this.http
      .get<Person[]>(this.baseUrl + '/api/persons')
      .subscribe(t => (this.persons = t));
  }

  addVote(vote: Vote): Observable<Person> {
    return this.http.post<Person>(this.baseUrl + '/api/addVote', { vote });
  }
}
