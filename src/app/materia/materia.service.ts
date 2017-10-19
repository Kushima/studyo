import { Materia } from './materia';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MateriaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private materiaUrl = 'http://localhost:8080/subject';

  constructor(private http: Http) { }

  getSubjects(): Promise<Materia[]> {
    return this.http.get(this.materiaUrl)
               .toPromise()
               .then(response => response.json()._embedded.subject as Materia[])
               .catch(this.handleError);
  }

  create(materia: Materia): Promise<Materia> {
    return this.http
      .post(this.materiaUrl, JSON.stringify(materia), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Materia)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
