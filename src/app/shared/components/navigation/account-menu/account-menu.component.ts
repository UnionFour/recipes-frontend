import {Component, Inject, ViewChild} from '@angular/core';
import {TuiAlertService, TuiHostedDropdownComponent} from '@taiga-ui/core';
import { AuthService } from '../../../../core/services/auth.service';
import {takeUntil} from "rxjs";

@Component({
    selector: 'app-account-menu',
    templateUrl: './account-menu.component.html',
    styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent {
    @ViewChild(TuiHostedDropdownComponent) component?: TuiHostedDropdownComponent;

    open = false;

    constructor(
        public authService: AuthService,
        @Inject(TuiAlertService) private readonly alert: TuiAlertService
    ) {
    }

    onClick(): void {
        this.open = false;
        this.component?.nativeFocusableElement?.focus();
    }

    public logout() {
        this.authService.logout()
        this.alert.open('Вы вышли из аккаунта').subscribe()
    }
}
