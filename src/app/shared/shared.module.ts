import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import {
    TuiAvatarModule,
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiInputRangeModule,
    TuiMultiSelectModule, TuiTagModule
} from '@taiga-ui/kit';
import { TuiHintModule, TuiLoaderModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { AsyncSelectComponent } from './components/async-select/async-select.component';
import { TuiLetModule, TuiValueChangesModule } from '@taiga-ui/cdk';
import { InputRangeComponent } from './components/input-range/input-range.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { DeclensionPipe } from './pipes/declension.pipe';
import { SideIconComponent } from './components/side-icon/side-icon.component';
import { SelectComponent } from './components/select/select.component';
import { HideSelectedPipe } from './pipes/hide-selected.pipe';

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
    LayoutComponent,
    SideIconComponent,
    SelectComponent,
];

const pipes = [
    DeclensionPipe,
    HideSelectedPipe
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
        RouterOutlet,
        TuiValueChangesModule,
        FormsModule,
        TuiTagModule,
        TuiLoaderModule
    ],
    declarations: [
        ...components,
        ...pipes,
    ],
    exports: [
        ...components,
        ...modules,
        ...pipes,
    ]
})
export class SharedModule {
}
