import { Component, ViewChild } from '@angular/core';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
    selector: 'app-account-menu',
    templateUrl: './account-menu.component.html',
    styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent {
    @ViewChild(TuiHostedDropdownComponent) component?: TuiHostedDropdownComponent;

    open = false;

    constructor(public authService: AuthService) {
    }

    onClick(): void {
        this.open = false;
        this.component?.nativeFocusableElement?.focus();
    }
}
