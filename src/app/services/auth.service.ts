import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {

    constructor(private httpclient: HttpClient) {}

    user: {
        userName: string,
        userEmail: string
    };
    isAuthenticated = false;

    login() {
        this.user = {
            userName: 'Jan Kowalski',
            userEmail: 'jan@kowalski.com'
        };
        this.isAuthenticated = true;
        console.log(`Welcome ${this.user.userName}. You are loggedin!`);
    }

    logout() {
        console.log('Auth Service logOUT working');
        this.user = {
            userName: '',
            userEmail: ''
        };
        this.isAuthenticated = false;
        console.log('you have logged out', this.user);
    }

    getUserInfo() {
        return this.user;
    }


}
