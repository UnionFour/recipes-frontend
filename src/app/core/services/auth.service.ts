import { Injectable } from '@angular/core';
import {Observable, of, tap, throwError} from 'rxjs';

import { User } from '../models/auth/user';
import { LoginResponse } from '../models/auth/login-response';
import { RegisterResponse } from '../models/auth/register-response';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() { }

    public get accessToken() {
        return localStorage.getItem('accessToken')
    }

    public get isAuthenticated() {
        return !!this.accessToken
    }

    public login(user: User) {
        /**
         Server request emulation
         */
        return of({
            refresh: 'mockRefreshToken',
            access: 'mockAccessToken'
        }).pipe(
            tap(this.setAccessToken)
        )
    }

    public register(user: User): Observable<RegisterResponse> {
        /**
         * Server request emulation
         */
        return of({
            id: 1,
            login: user.login,
            password: user.password
        })
    }

    public logout() {
        this.setAccessToken(null)
    }

    private setAccessToken(response: LoginResponse | null) {
        if (response) {
            localStorage.setItem('accessToken', response.access)
        } else {
            localStorage.clear()
        }
    }

}
