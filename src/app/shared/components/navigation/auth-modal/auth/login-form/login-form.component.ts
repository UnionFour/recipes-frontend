import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, takeUntil, tap } from 'rxjs';
import { TuiAlertService } from '@taiga-ui/core';

import { User } from '../../../../../../core/models/auth/user';
import { AuthService } from '../../../../../../core/services/auth.service';
import { DestroyableComponent } from '../../../../destroyable-component/destroyable.component';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent extends DestroyableComponent implements OnInit {
    loginForm!: FormGroup;

    errorExists = false
    errorMessage = ''

    constructor(
        private authService: AuthService,
        @Inject(TuiAlertService) private readonly alert: TuiAlertService
    ) {
        super();
    }

    public ngOnInit() {
        this.loginForm = new FormGroup({
            login: new FormControl('', [
                Validators.required,
            ]),
            password: new FormControl('', [
                Validators.required,
            ])
        })
    }

    public submitLoginForm() {
        if (this.loginForm.invalid) {
            return
        }

        const user: User = {
            login: this.loginForm.value.login,
            password: this.loginForm.value.password
        }

        this.authService.login(user).pipe(
            tap(() => this.alert.open('Успешный вход',
                { status: 'success' }).subscribe()
            ),
            catchError((error) => this.handleLoginError(error))
        ).pipe(
            takeUntil(this.destroy$)
        ).subscribe();
    }

    private handleLoginError(errorMessage: string) {
        this.openError(errorMessage);
        this.resetLoginFormControlValue('password');
        return this.alert.open('Ошибка входа', { status: 'error' });
    }

    private resetLoginFormControlValue(controlName: string) {
        this.loginForm.get(controlName)?.setValue('');
    }

    private openError(errorMessage: string) {
        this.errorExists = true;
        this.errorMessage = errorMessage;
    }

    public closeError() {
        this.errorExists = false;
        this.errorMessage = '';
    }
}
