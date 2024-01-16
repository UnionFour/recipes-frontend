import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedRecipesPageComponent } from './saved-recipes-page.component';

const components = [
    SavedRecipesPageComponent
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule
    ]
})
export class SavedRecipesPageModule { }
