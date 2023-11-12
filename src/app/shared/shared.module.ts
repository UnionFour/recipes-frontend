import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import {
    TuiAvatarModule,
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiInputRangeModule,
    TuiMultiSelectModule
} from '@taiga-ui/kit';
import { TuiHintModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { AsyncSelectComponent } from './components/async-select/async-select.component';
import { TuiLetModule } from '@taiga-ui/cdk';
import { InputRangeComponent } from './components/input-range/input-range.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { DeclensionPipe } from './pipes/declension.pipe';

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
    AsyncSelectComponent,
    InputRangeComponent,
    LayoutComponent
];

const pipes = [
    DeclensionPipe
];

@NgModule({
    imports: [
        modules,
        TuiAvatarModule,
        TuiDataListWrapperModule,
        TuiLetModule,
        TuiMultiSelectModule,
        TuiInputRangeModule,
        TuiSvgModule,
        RouterOutlet
    ],
    declarations: [
        ...components,
        ...pipes
    ],
    exports: [
        ...components,
        ...modules,
        ...pipes
    ]
})
export class SharedModule {
}
