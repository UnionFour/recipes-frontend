import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

const modules = [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
];

const declarations = [
    NavigationComponent
];

@NgModule({
    imports: modules,
    declarations: declarations,
    exports: declarations
})
export class SharedModule {
}
