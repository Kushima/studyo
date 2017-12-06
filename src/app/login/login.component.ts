import { Globals } from './../global/globals';
import { SubjectDayService } from './../subject-day/service/subject-day.service';
import { LoginService } from './login.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

// make google login works
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  public auth2: any;

  public userImg: string;
  public userName: string;

  constructor(private router: Router, private subjectDayService: SubjectDayService, private globals: Globals) {}

  ngOnInit() {
    if (localStorage.getItem('idToken')) {
      this.userImg = localStorage.getItem('userImg');
      this.userName = localStorage.getItem('userName');
      this.router.navigateByUrl('my-week');
    }
  }

  public googleInit() {
    // get the user from google sign in
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '678647856070-hq2qe321rqilfs4fgosd98nn6ofm86jk.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      const signinChanged = (val) => {
        console.log('Signin state changed to ', val);
        localStorage.setItem('isSignedIn', val);
        if (val === true) {
          console.log('ESTA LOGADO!!!');

          const googleUser = this.auth2.currentUser.get();

          const profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId());
          console.log('Full Name: ' + profile.getName());
          console.log('Given Name: ' + profile.getGivenName());
          console.log('Family Name: ' + profile.getFamilyName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());

          const idToken = googleUser.getAuthResponse().id_token;
          console.log('Token || ' + idToken);

          // TODO: DONT FORGET TO REMOVE THIS LOGS
          localStorage.setItem('idToken', googleUser.getAuthResponse().id_token);
          localStorage.setItem('userImg', profile.getImageUrl());
          localStorage.setItem('userName', profile.getName());

          // this.router.navigateByUrl('my-week');
        } else {
          alert('que pena, você foi embora :(');
          console.log('QUEM É VOCÊ???');

          // this.router.navigate(['/login']);
        }
      };

      // Listen for sign-in state changes.
      this.auth2.isSignedIn.listen(signinChanged);

      this.attachSignin(document.getElementById('googleSignInButton'));
    });

    this.globals.gapi = gapi;
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        const profile = googleUser.getBasicProfile();
        // TODO: DONT FORGET TO REMOVE THIS LOGS
        const idToken = googleUser.getAuthResponse().id_token;
        console.log('Token || ' + idToken);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        if (idToken) {
          localStorage.setItem('idToken', googleUser.getAuthResponse().id_token);
          localStorage.setItem('userImg', profile.getImageUrl());
          localStorage.setItem('userName', profile.getName());
          location.reload();
        }

      }, (error) => {
        console.log(JSON.stringify(error, undefined, 2));
    });
  }

  signOut() {
    localStorage.clear();

    this.auth2 = gapi.auth2.getAuthInstance();
    this.auth2.signOut().then(function () {
      console.log('User signed out.');
    });

  }

  ngAfterViewInit() {
    this.googleInit();
  }
}
