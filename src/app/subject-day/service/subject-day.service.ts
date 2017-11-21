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

    const body = 'idToken=eyJhbGciOiJSUzI1NiIsImtpZCI6IjMwZjlkNWYxZGM3OGM3MDExOTFhY2UyNGY4YTU0NzZiYjc4YTNkMTUifQ.eyJhenAiOiI2Nzg2NDc4NTYwNzAtaHEycWUzMjFycWlsZnM0Zmdvc2Q5OG5uNm9mbTg2amsuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2Nzg2NDc4NTYwNzAtaHEycWUzMjFycWlsZnM0Zmdvc2Q5OG5uNm9mbTg2amsuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMzODkwNzU2MTgzOTc2NzQyNDUiLCJlbWFpbCI6ImFsbGlzb25rdXNoaW1hQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiNFdVLTNRVjdFVGlkRmNUQ2RCbEpOQSIsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJqdGkiOiI3YjQyZGVmZTk1NmM5ZGY1MDNkMGYwZjEwYzkyNzVlNDM5NzY0ZGZkIiwiaWF0IjoxNTExMjM3NDA2LCJleHAiOjE1MTEyNDEwMDYsIm5hbWUiOiJBbGxpc29uIEt1c2hpbWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy05ZnRpUzRmTzk5OC9BQUFBQUFBQUFBSS9BQUFBQUFBQVM1MC9GYS02bTRta0hoNC9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiQWxsaXNvbiIsImZhbWlseV9uYW1lIjoiS3VzaGltYSIsImxvY2FsZSI6ImVuIn0.PTND3TWO7R40u04gCyFcIvwBPVfAe24YfI48JaZ67lZEX7Ny14Xzu5NdnU1YDa1h5qalnBMcyO7tT_b9KZtjtH2HMK4Vm-zGqnxL-IOMxMuww1HjNZ4KwjZm4t_rjrIWgpLsMkF5dB2ce7E4dGFoLBgiTCbcJEImyARBZ7oEMWwYuk6ICFjqkvRkzMtevQy232r8gTe5uW9cwkdmFQHGtsXcPnaj6BedjNLdn8PML5fvXJ5mfgQE9OfDSvuFi2f0JKRvS_mnjsCGGmqpDKlBX7i1F9RvouikG-NesqJFurvWA6PsvbhfqNkts46DLO1pL3z1Ku2jdxpkmN3OnPakHA';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.materiaUrl, body, { headers: headers})
               .toPromise()
               .then(response => console.log(response))
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
