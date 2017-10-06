import { Materia } from './materia';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MateriaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private materiaUrl = 'http://localhost:8080/people';

  constructor(private http: Http) { }

  create(first: string, last: string): Promise<Materia> {
    console.log('O que foi para o mongo: ' + JSON.stringify({firstName: first, lastName: last}));
    return this.http
      .post(this.materiaUrl, JSON.stringify({firstName: first, lastName: last}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Materia)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
