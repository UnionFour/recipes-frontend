import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { TuiAvatarModule, TuiDataListWrapperModule, TuiInputModule, TuiMultiSelectModule } from '@taiga-ui/kit';
import { TuiHintModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { AsyncSelectComponent } from './components/async-select/async-select.component';
import { TuiLetModule } from '@taiga-ui/cdk';

const modules = [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiHintModule
];

const components = [
    NavigationComponent,
    SearchComponent,
    AsyncSelectComponent
];

@NgModule({
    imports: [
        modules,
        TuiAvatarModule,
        TuiDataListWrapperModule,
        TuiLetModule,
        TuiMultiSelectModule
    ],
    declarations: components,
    exports: [
        components,
        modules
    ]
})
export class SharedModule {
}
