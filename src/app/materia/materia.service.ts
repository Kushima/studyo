import { Materia } from './model/materia';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MateriaService {

  private materiaUrl = 'http://localhost:8080/subject';

  constructor(private http: Http) { }

  getSubjects(): Promise<Materia[]> {
    const headers = new Headers();
    const idToken = localStorage.getItem('idToken');
    headers.append('Authorization', 'Bearer ' + idToken);

    return this.http.get(this.materiaUrl, { headers: headers })
               .toPromise()
               .then(response => response.json()._embedded.subject as Materia[])
               .catch(this.handleError);
  }

  create(materia: Materia): Promise<Materia> {
    const headers = new Headers();
    const idToken = localStorage.getItem('idToken');
    headers.append('Authorization', 'Bearer ' + idToken);
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(this.materiaUrl, JSON.stringify(materia), {headers: headers})
      .toPromise()
      .then(res => res.json().data as Materia)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
