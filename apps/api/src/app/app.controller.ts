import { Controller, Get, Post, Body } from '@nestjs/common';

import { Message, Vote, Person } from '@hotornot/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
