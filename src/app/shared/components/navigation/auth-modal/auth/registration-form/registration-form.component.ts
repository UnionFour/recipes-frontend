import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, switchMap, takeUntil, tap } from 'rxjs';
import { TuiAlertService } from '@taiga-ui/core';

import { User } from '../../../../../../core/models/auth/user';
import { RegisterResponse } from '../../../../../../core/models/auth/register-response';
import { AuthService } from '../../../../../../core/services/auth.service';
import { DestroyableComponent } from '../../../../destroyable-component/destroyable.component';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent extends DestroyableComponent implements OnInit {
    registrationForm!: FormGroup;

    errorExists = false;
    errorMessage = '';

    constructor(
        private authService: AuthService,
        @Inject(TuiAlertService) private readonly alert: TuiAlertService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.registrationForm = new FormGroup({
            login: new FormControl('', [
                Validators.required
            ]),
            password: new FormControl('', [
                Validators.required,
            ]),
        });
    }

    public submitRegisterForm() {
        if (this.registrationForm.invalid) {
            return;
        }

        const user: User = {
            login: this.registrationForm.value.login,
            password: this.registrationForm.value.password,
        };

        this.authService.register(user).pipe(
            switchMap((userData) => this.login(userData)),
            catchError((error) => this.handleRegistrationError(error))
        ).pipe(
            takeUntil(this.destroy$)
        ).subscribe();
    }

    private login(userData: RegisterResponse) {
        const user: User = {
            login: userData.login,
            password: userData.password
        };

        return this.authService.login(user).pipe(
            tap(() => this.alert.open('Успешная регистарция',
                { status: 'success' }).subscribe()
            ),
            catchError(() => this.handleLoginError())
        );
    }

    private handleRegistrationError(errorMessage: string) {
        this.openError(errorMessage);
        this.resetRegistrationFormControlValue('password');
        return this.alert.open('Ошибка регистрации', 
            { status: 'error' });
    }

    private resetRegistrationFormControlValue(controlName: string) {
        this.registrationForm.get(controlName)?.setValue('');
    }

    private handleLoginError() {
        return this.alert.open('Ошибка автомаического входа', 
            { status: 'error' });
    }

    private openError(errorMessage: string) {
        this.errorExists = true;
        this.errorMessage = 'Данный логин уже занят';
    }

    public closeError() {
        this.errorExists = false;
        this.errorMessage = '';
    }
}
