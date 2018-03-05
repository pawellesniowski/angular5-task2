import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ServerService } from '../services/server.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() loginPageActive: boolean;

  constructor(private serverService: ServerService, private authService: AuthService) {}

  currentUser: {};

  ngOnInit() {
    this.authService.login();
    this.currentUser = this.authService.getUserInfo();
  }

  onCourses() {
    this.serverService.getList()
      .subscribe(
        (data: any[]) => console.log(data),
        (error) => console.log(error)
      );
  }

  onLogout() {
    this.authService.logout();
  }

  onLogin() {
    this.authService.login();
  }

  isAuth() {
    return true;
  }


}
