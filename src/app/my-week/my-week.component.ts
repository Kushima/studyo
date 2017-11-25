import { Router } from '@angular/router';
import { Constants } from './../constants/constants';
import { SubjectDay } from './../subject-day/model/subject-day';
import { SubjectDayService } from './../subject-day/service/subject-day.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-week',
  templateUrl: './my-week.component.html',
  styleUrls: ['./my-week.component.scss']
})
export class MyWeekComponent implements OnInit {

  subjectDays: SubjectDay[] = [];

  weekDays = Constants.WEEK_DAYS;

  constructor(private subjectDayService: SubjectDayService, private router: Router) { }

  ngOnInit() {

    if (!localStorage.getItem('idToken')) {
      this.router.navigateByUrl('login');
    }

    this.subjectDayService
    .getSubjectDays()
    .then(subjectDays => this.subjectDays = subjectDays)
    .catch(err => this.router.navigateByUrl('login'));
  }
}
