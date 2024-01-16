import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedRecipesPageComponent } from './saved-recipes-page.component';
import {SharedModule} from "../../shared/shared.module";

const components = [
    SavedRecipesPageComponent
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class SavedRecipesPageModule { }
