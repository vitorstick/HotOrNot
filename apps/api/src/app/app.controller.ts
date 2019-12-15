import { Controller, Get, Post, Body } from '@nestjs/common';
import { Message, Vote, Person } from '@hotornot/api-interfaces';
import { AppService } from './app.service';
import { environment } from '../environments/environment';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('environment: ', environment.baseUrl);
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  }

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('persons')
  getPersons() {
    return this.appService.getPersons();
  }

  @Post('addVote')
  addVote(@Body() vote: { vote: Vote }): Person {
    // console.log('vote', vote.vote);
    return this.appService.addVote(vote.vote);
  }
}
