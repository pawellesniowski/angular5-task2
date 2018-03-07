import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AuthService {
    private isAuth = new Subject<boolean>();

    public user: {
        userName: string,
        userEmail: string
    };

    constructor(private httpclient: HttpClient) {
    }

    login(name) {
        this.user = {
            userName: name,
            userEmail: 'jan@kowalski.com'
        };
        this.isAuth.next(true);
        console.log(`Welcome ${this.user.userName}. You are loggedin!`);
    }

    logout() {
        console.log('Auth Service logOUT working');
        this.user = {
            userName: '',
            userEmail: ''
        };
        this.isAuth.next(false);
        console.log('you have logged out', this.user);
    }

    isAuthenticated() {
        return this.isAuth.next(true);
    }

    getUserInfo() {
        return this.user;
    }


}
