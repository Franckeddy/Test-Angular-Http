import {Component, OnInit} from '@angular/core';
import {AuthServices} from '../services/auth.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authservices: AuthServices, private router: Router) {
  }

  ngOnInit() {
    this.authStatus = this.authservices.isAuth;
  }

  onSignIn() {
    this.authservices.signIn().then(
      () => {
        this.authStatus = this.authservices.isAuth;
        this.router.navigate(['devices']);
      }
    );
  }

  onSignOut() {
    this.authservices.signOut();
    this.authStatus = this.authservices.isAuth;
  }
}
