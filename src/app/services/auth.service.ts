import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
    isAuth = false;

    constructor(private httpclient: HttpClient) {}

    user: {
        userName: string,
        userEmail: string
    };

    login() {
        this.user = {
            userName: 'Jan Kowalski',
            userEmail: 'jan@kowalski.com'
        };
        this.isAuth = true;
        console.log(`Welcome ${this.user.userName}. You are loggedin!`);
    }

    logout() {
        console.log('Auth Service logOUT working');
        this.user = {
            userName: '',
            userEmail: ''
        };
        this.isAuth = false;
        console.log('you have logged out', this.user);
    }

    isAuthenticated() {
        return this.isAuth;
    }

    getUserInfo() {
        return this.user;
    }


}
