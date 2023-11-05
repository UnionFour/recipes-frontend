import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiHintModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

const modules = [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
];

const declarations = [
    NavigationComponent,
    SearchComponent
];

@NgModule({
    imports: [
        modules,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiHintModule
    ],
    declarations: declarations,
    exports: declarations
})
export class SharedModule {
}
