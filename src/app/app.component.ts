import { Router } from '@angular/router';
import { MateriaService } from './materia/materia.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
Materia
} from './materia/model/materia';

// make jquery works
declare var jquery: any;
declare var $: any;

// make google login works
declare const gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public auth2: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // makes popover work
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
  }

  signOut() {
    localStorage.clear();

    alert('saiu');
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '678647856070-hq2qe321rqilfs4fgosd98nn6ofm86jk.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
    });

    // const auth2 = gapi.auth2.getAuthInstance();
    alert('saiu');
    this.auth2.signOut().then(function () {
      alert('saiu');
      console.log('User signed out.');
    });

  }
}
