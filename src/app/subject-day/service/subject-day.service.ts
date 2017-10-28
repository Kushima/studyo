import { SubjectDay } from '../model/subject-day';
import { Injectable } from '@angular/core';
import { Materia } from '../../materia/model/materia';
import { Headers, Http } from '@angular/http';
@Injectable()
export class SubjectDayService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private materiaUrl = 'http://localhost:8080/subjectDay';

  constructor(private http: Http) { }

  getSubjectDays(): Promise<SubjectDay[]> {
    return this.http.get(this.materiaUrl)
               .toPromise()
               .then(response => response.json()._embedded.subjectDay as SubjectDay[])
               .catch(this.handleError);
  }

  create(subjectDay: SubjectDay): Promise<SubjectDay> {
    return this.http
      .post(this.materiaUrl, JSON.stringify(subjectDay), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as SubjectDay)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
