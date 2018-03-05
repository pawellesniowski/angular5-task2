import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor() {  }

  ngOnInit() {
  }

  onLoginEnter(login, password) {
    console.log('onLoginEnter: ', login, password);
  }

}
