import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
