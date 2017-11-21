import { SubjectDayService } from './../subject-day/service/subject-day.service';
import { LoginService } from './login.service';
import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';

// make google login works
declare const gapi: any;

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  public auth2: any;

  constructor(private router: Router, private subjectDayService: SubjectDayService) {}

  ngOnInit() {
    this.subjectDayService
    .getSubjectDays()
    .then(subjectDays => console.log(subjectDays));
  }

  public googleInit() {
    // this.router.navigateByUrl('my-week');
    // get the user from google sign in
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '678647856070-hq2qe321rqilfs4fgosd98nn6ofm86jk.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin(document.getElementById('googleSignInButton'));

      const signinChanged = (val) => {
        console.log('Signin state changed to ', val);
        localStorage.setItem('isSignedIn', val);
        if (val === true) {
            console.log('ESTA LOGADO!!!');
            this.router.navigateByUrl('my-week');
        } else {
          console.log('QUEM É VOCÊ???');
          this.router.navigate(['/login']);
        }
      };

      // Listen for sign-in state changes.
      this.auth2.isSignedIn.listen(signinChanged);

      if (this.auth2.isSignedIn.get() === true) {
        this.auth2.signIn();
        console.log('ogando');
        // this.router.navigate(['/login']);
      }
      console.log(this.auth2.isSignedIn.get());
    });
  }

    public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        const profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        // YOUR CODE HERE

      }, (error) => {
        console.log(JSON.stringify(error, undefined, 2));
    });
  }

  ngAfterViewInit() {
    this.googleInit();
  }
}
