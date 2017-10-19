import { MateriaService } from './materia.service';
import { Materia} from './materia';
import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent implements OnInit {
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

    materias: Materia[] = [];

    constructor(private materiaService: MateriaService) { }

    ngOnInit(): void {
      // this.addMateria();
      this.getSubjects();

      // code to make help popups work
      $(function () {
        $('[data-toggle="popover"]').popover();
      });
    }

    getSubjects(): void {
      this.materiaService
          .getSubjects()
          .then(materias => this.materias = materias);
    }

    addMateria(): void {
      const materia: Materia = {
        id: 'angular',
        nome: 'Angular',
        cor: '333333',
        descricao: 'Angular is a framework for building client' +
       'applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.'
      };
      console.log('iniciando adição de pessoa...');
      this.materiaService.create(materia);

      this.materias.push(materia);
    }

}
