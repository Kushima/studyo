import { MateriaService } from './materia/materia.service';
import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    // makes popover work
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
  }
}
