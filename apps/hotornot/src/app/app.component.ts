import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@hotornot/api-interfaces';
import { MainService } from './services/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hotornot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public hello$: Observable<Message>;
  constructor(private mainService: MainService) {
    this.hello$ = this.mainService.getMessage();
  }

  ngOnInit() {}
}
