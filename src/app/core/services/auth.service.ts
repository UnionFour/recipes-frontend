import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/auth/user';
import { LoginResponse } from '../models/auth/login-response';
import { RegisterResponse } from '../models/auth/register-response';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() { }

    get accessToken(): string | null {
        return localStorage.getItem('accessToken')
    }

    public login(user: User): Observable<LoginResponse | null> {
        /**
         * Server request emulation
         */
        return of({
            refresh: 'mockRefreshToken',
            access: 'mockAccessToken'
        })

    }

    public register(user: User): Observable<RegisterResponse> {
        /**
         * Server request emulation
         */
        return of({
            id: 1,
            email: 'mock@gmail.com',
            login: 'mockName'
        })
    }

    public logout() {
        this.setAccessToken(null)
    }

    public isAuthenticated(): boolean {
        return !!this.accessToken
    }

    private setAccessToken(response: LoginResponse | null) {
        if (response) {
            localStorage.setItem('accessToken', response.access)
        } else {
            localStorage.clear()
        }
    }

}
