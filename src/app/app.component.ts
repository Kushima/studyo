import { MateriaService } from './materia/materia.service';
import { Component, OnInit } from '@angular/core';
import { Materia } from './materia/materia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'app';

    daysDesc = [
      {text: 'S'},
      {text: 'T'},
      {text: 'Q'},
      {text: 'Q'},
      {text: 'S'},
      {text: 'S'},
      {text: 'D'},
    ];

      tiles = [
        {text: '', isActiveDay: false},
        {text: '', isActiveDay: false},
        {text: '', isActiveDay: true},
        {text: '', isActiveDay: false},
        {text: '', isActiveDay: false},
        {text: '', isActiveDay: false},
        {text: '', isActiveDay: false},
      ];

  constructor(private materiaService: MateriaService) { }

  ngOnInit(): void {
    this.addMateria();
  }

  addMateria(): void {
    console.log('iniciando adição de pessoa...');
    this.materiaService.create('Allison', 'Kushima');
  }
}
