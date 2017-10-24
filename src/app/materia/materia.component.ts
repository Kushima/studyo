import { SubjectDay } from './../subject-day/subject-day';
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

  // valid values for hours
  hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

  // valid values for minutes
  minutes = ['00', '15', '30', '45'];

  // valid values for week days
  weekDays = [ { val: 'MON', desc: 'Monday' },
  { val: 'TUE', desc: 'Tuesday' },
  { val: 'WED', desc: 'Wednesday' },
  { val: 'THU', desc: 'Thursday' },
  { val: 'FRI', desc: 'Friday' },
  { val: 'SAT', desc: 'Saturday' },
  { val: 'SUN', desc: 'Sunday' } ];

  subjects: Materia[] = [];
  newSubjectDay: SubjectDay = {};

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
        .then(subjects => this.subjects = subjects);
  }

  subjectDay(): void {
    const materia: Materia = {
      id: 'angular',
      name: 'Angular',
      color: '333333',
      description: 'Angular is a framework for building client' +
      'applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.'
    };
    console.log('iniciando adição de pessoa...');
    this.materiaService.create(materia);

    this.subjects.push(materia);
  }

}
