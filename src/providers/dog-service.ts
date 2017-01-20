import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

/*
  Generated class for the DogService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DogService {

  constructor(public http: Http) {

  }

  getDogs() {
    return this.http.get('assets/mock-data/dogs.json')
      .map(res => res.json());
  }
}
