import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { User } from '../models/auth/user';
import { LoginResponse } from '../models/auth/login-response';
import { RegisterResponse } from '../models/auth/register-response';
import { RegisterUserPayload } from '../../../gql/graphql';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private apollo: Apollo) {}

    public get accessToken() {
        return localStorage.getItem('accessToken');
    }

    public get isAuthenticated() {
        return !!this.accessToken;
    }

    public login(user: User): Observable<LoginResponse | null> {
        /**
         Server request emulation
         */
        return this.apollo
            .mutate<{ registerUser: RegisterUserPayload }>({
                mutation: gql`
                    mutation AuthorizeUser($input: AuthorizeUserInput!) {
                        authorizeUser(input: $input) {
                            userPayload {
                                id
                                login
                                token
                            }
                        }
                    }
                `,
                variables: {
                    input: {
                        input: {
                            email: user.login,
                            password: user.password,
                        }
                    },
                },
            })
            .pipe(
                map((result) => {
                    const userPayload = result.data?.registerUser.userPayload;

                    this.setAccessToken({
                        access: userPayload?.token ?? '',
                        refresh: '',
                    });

                    return {
                        refresh: '',
                        access: userPayload?.token ?? ''
                    };
                }),
            );
    }

    public register(user: User): Observable<RegisterResponse> {
        /**
         * Server request emulation
         */

        return this.apollo
            .mutate<{ registerUser: RegisterUserPayload }>({
                mutation: gql`
                    mutation RegisterUser($input: RegisterUserInput!) {
                        registerUser(input: $input) {
                            userPayload {
                                id
                                login
                                token
                            }
                        }
                    }
                `,
                variables: {
                    input: {
                        input: {
                            email: user.login,
                            password: user.password,
                        }
                    },
                },
            })
            .pipe(
                map((result) => {
                    const userPayload = result.data?.registerUser.userPayload;

                    this.setAccessToken({
                        access: userPayload?.token ?? '',
                        refresh: '',
                    });

                    return {
                        id: userPayload?.id ?? '',
                        login: userPayload?.login ?? '',
                        password: user.password,
                    };
                }),
            );
    }

    public logout() {
        this.setAccessToken(null);
    }

    private setAccessToken(response: LoginResponse | null) {
        if (response) {
            localStorage.setItem('accessToken', response.access);
        } else {
            localStorage.clear();
        }
    }
}
