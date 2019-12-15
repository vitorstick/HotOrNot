import { Injectable } from '@nestjs/common';
import { Message, Person, Vote } from '@hotornot/api-interfaces';
import { ConfigService } from 'nestjs-config';

@Injectable()
export class AppService {
  public personList: Person[] = [
    {
      name: 'Flavia Saraiva',
      downvotes: 0,
      id: 1,
      upvotes: 0,
      url: 'https://i.redd.it/scvz6mlmcm441.jpg'
    },
    {
      name: 'Juliane Seyfarth',
      downvotes: 0,
      id: 2,
      upvotes: 0,
      url: 'https://i.imgur.com/ywI090c.jpg'
    },
    {
      name: 'Elizabeth Clay',
      downvotes: 0,
      id: 3,
      upvotes: 0,
      url: 'https://i.imgur.com/IEDW41F.jpg'
    },
    {
      name: 'Fanny Stollar',
      downvotes: 0,
      id: 4,
      upvotes: 0,
      url: 'https://i.imgur.com/4KmdNMn.jpg'
    },
    {
      name: 'Alica Schmidt',
      downvotes: 0,
      id: 5,
      upvotes: 0,
      url: 'https://i.imgur.com/cQp34vm.jpg'
    },
    {
      name: 'Daria Spiridonova',
      downvotes: 0,
      id: 6,
      upvotes: 0,
      url: 'https://i.redd.it/z3ow5h5cay341.jpg'
    }
  ];

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  constructor(private readonly config: ConfigService) {
    this.config = config;
    console.log('this.config', this.config.get('app.environment'));
  }

  getPersons(): Person[] {
    return this.personList;
  }

  addVote(vote: Vote): Person {
    // console.log('personId', vote, vote.personId);
    const currentPerson = this.personList.find(person => {
      return person.id === vote.personId;
    });
    if (!!currentPerson) {
      if (vote.downvote) {
        currentPerson.downvotes = currentPerson.downvotes + 1;
      }
      if (vote.upvote) {
        currentPerson.upvotes = currentPerson.upvotes + 1;
      }
    }
    return currentPerson;
  }
}
