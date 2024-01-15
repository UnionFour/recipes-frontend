import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import {
    TuiAvatarModule,
    TuiDataListWrapperModule, TuiFieldErrorPipeModule,
    TuiInputModule, TuiInputPasswordModule,
    TuiInputRangeModule,
    TuiMultiSelectModule, TuiTabsModule, TuiTagModule
} from '@taiga-ui/kit';
import {
    TuiButtonModule,
    TuiDataListModule, TuiDialogModule, TuiErrorModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiLoaderModule, TuiNotificationModule,
    TuiSvgModule,
    TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { TuiAutoFocusModule, TuiLetModule, TuiValueChangesModule } from '@taiga-ui/cdk';
import { InputRangeComponent } from './components/input-range/input-range.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DeclensionPipe } from './pipes/declension.pipe';
import { SideIconComponent } from './components/side-icon/side-icon.component';
import { SelectComponent } from './components/select/select.component';
import { HideSelectedPipe } from './pipes/hide-selected.pipe';
import { AccountMenuComponent } from './components/navigation/account-menu/account-menu.component';
import { AuthModalComponent } from './components/navigation/auth-modal/auth-modal.component';
import { AuthComponent } from './components/navigation/auth-modal/auth/auth.component';
import { LoginFormComponent } from './components/navigation/auth-modal/auth/login-form/login-form.component';
import {
    RegistrationFormComponent
} from './components/navigation/auth-modal/auth/registration-form/registration-form.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SearchAsyncSelectComponent } from './components/search/search-async-select/search-async-select.component';


const modules = [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiHintModule,
    TuiAvatarModule,
    TuiDataListWrapperModule,
    TuiLetModule,
    TuiMultiSelectModule,
    TuiInputRangeModule,
    TuiSvgModule,
    RouterOutlet,
    TuiValueChangesModule,
    FormsModule,
    TuiTagModule,
    TuiLoaderModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiAutoFocusModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    RouterLink,
    TuiTabsModule,
    TuiInputPasswordModule,
    TuiNotificationModule
];

const components = [
    NavigationComponent,
    SearchComponent,
    InputRangeComponent,
    LayoutComponent,
    SideIconComponent,
    SelectComponent,
    AccountMenuComponent,
    AuthModalComponent,
    AuthComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    TabsComponent,

];

const pipes = [
    DeclensionPipe,
    HideSelectedPipe
];

@NgModule({
    imports: [
        ...modules
    ],
    declarations: [
        ...components,
        ...pipes,
        SearchAsyncSelectComponent,
    ],
    exports: [
        ...components,
        ...modules,
        ...pipes,
    ]
})
export class SharedModule {
}
