import { Globals } from './global/globals';
import { Router } from '@angular/router';
import { MateriaService } from './materia/materia.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Materia } from './materia/model/materia';

// make jquery works
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private globals: Globals) {}

  ngOnInit(): void {
    // makes popover work
    $(function () {
      $('[data-toggle="popover"]').popover();
    });

    // verify if is authenticated
    if (localStorage.getItem('idToken')) {
      this.router.navigateByUrl('my-week');
    }
  }
}
