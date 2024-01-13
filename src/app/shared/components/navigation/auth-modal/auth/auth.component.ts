import { Component, Inject } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Это обязательное поле',
            },
        },
    ],
})
export class AuthComponent {
    activeTabIndex = 0;
    tabs = ['Вход', 'Регистрация'];

    constructor(
        @Inject(TuiAlertService) private readonly alert: TuiAlertService
    ) {}

    onChangeTab(activeTabIndex: number) {
        this.activeTabIndex = activeTabIndex;
    }

}
