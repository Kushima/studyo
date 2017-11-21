import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private materiaUrl = 'http://localhost:8080/subjectDay';

  constructor(private http: Http) { }

  test(): Promise<String> {
    return this.http.get(this.materiaUrl)
               .toPromise()
               .then(response => response.json()._embedded.subject);
               // .catch(this.handleError);
  }

}
