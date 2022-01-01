import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemProductService implements InMemoryDbService {
  createDb() {
    let products = [{
        id: 1,
        name: 'iPad Pro 2021',
        description: " -since the 1500s - galley of type specimen book. -It has -but also the leap into electrspecimen book. -It has -but also the leap into elecspecimen book. -It has -but also the leap into electrspecimen book. -It has -but also the leap into electrspecimen book. -It has -but also the leap into electrtrspecimen book. -It has -but also the leap into electrspecimen book. -It has -but also the leap into electronic typesetting ",
        prix: 899,
      },
      {
        id: 2,
        name: 'iPad Classic 2021',
        description: " -since the 1500s - galley of type specimen book. -It has -but also the leap into electronic typesetting ",
        prix: 389,
      },
      {
        id: 3,
        prix: 669,
        name: 'iPad Air 4',
        description: " -since the 1500s - galley of type specimen book. -It has -but also the leap into electronic typesetting ",
      },
      {
        id: 4,
        prix: 1159,
        name: 'iPhone 13 Pro',
        description: " -since the 1500s - galley of type specimen book. -It has -but also the leap into electronic typesetting ",
      },
      {
        id: 5,
        prix: 2249,
        name: 'MacBook Pro',
        description: " -since the 1500s - galley of type specimen book. -It has -but also the leap into electronic typesetting ",
      },
      {
        id: 5,
        prix: 1129,
        name: 'MacBook Air',
        description: " -since the 1500s - galley of type specimen book. -It has -but also the leap into electronic typesetting ",
      },



    ];
    return {products};
  }
}
