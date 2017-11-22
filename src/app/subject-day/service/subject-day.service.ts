import { SubjectDay } from '../model/subject-day';
import { Injectable } from '@angular/core';
import { Materia } from '../../materia/model/materia';
import { Headers, Http } from '@angular/http';
@Injectable()
export class SubjectDayService {

  private headers = new Headers(); // {'Content-Type': 'application/json'});
  private materiaUrl = 'http://localhost:8080/subjectDay';

  constructor(private http: Http) { }

  getSubjectDays(): Promise<SubjectDay[]> {
    // tslint:disable-next-line:max-line-length
    const idToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwYWJjNTJhNzI2NWY2MDY2ZDI4ZGI3MzE2NGRkYzBmMjA2YzI0YmMifQ.eyJhenAiOiI2Nzg2NDc4NTYwNzAtaHEycWUzMjFycWlsZnM0Zmdvc2Q5OG5uNm9mbTg2amsuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2Nzg2NDc4NTYwNzAtaHEycWUzMjFycWlsZnM0Zmdvc2Q5OG5uNm9mbTg2amsuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMzODkwNzU2MTgzOTc2NzQyNDUiLCJlbWFpbCI6ImFsbGlzb25rdXNoaW1hQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoibWkwbG04VEdPX1hSX3ZVbmJET1MzUSIsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJqdGkiOiJhOTY2Yjc3NjhmMThjNjNmZmM2MmJjMTNjODc5Y2U5ZjIxMzE2OTBiIiwiaWF0IjoxNTExMzEzODYxLCJleHAiOjE1MTEzMTc0NjEsIm5hbWUiOiJBbGxpc29uIEt1c2hpbWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy05ZnRpUzRmTzk5OC9BQUFBQUFBQUFBSS9BQUFBQUFBQVM1MC9GYS02bTRta0hoNC9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiQWxsaXNvbiIsImZhbWlseV9uYW1lIjoiS3VzaGltYSIsImxvY2FsZSI6ImVuIn0.FsorslsFU4T5rhDZExbqFQY8RPiLCW8wge5n9y0bQp59eaShgXPc-NBWKryvh0wA_f70tv2zD0v0eHwVPtVsclzDxZFyYiwVVxzirYrMj8s4tf00I_ceUrlJQc7iXZ61IshtyPOyvLbxVqrZTN47Ra6wLJPDmtTr_HPtRyTB6iD3EgQDAkoi7Vp4oPpfh8mRAuvQFEY1CtJwerzR-5YutHr6iIJMArx-a7JPwPkcE4TbCBCBuPd60N8tqV75KFk9MiuOw_oC2ymB3Kd2sOX_CQofc5njNoV6-SxhphFX891MliO6ypccAu1bF6uBMafkh4VH2AKIg1f3oQhiDb915A';
    this.headers.append('Authorization', 'Bearer ' + idToken);

    return this.http.get(this.materiaUrl, { headers: this.headers })
    .toPromise()
    .then(response => console.log(response))
    .catch(this.handleError);
  }

  create(subjectDay: SubjectDay): Promise<SubjectDay> {
    this.headers.append('Content-Type', 'application/json');
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
