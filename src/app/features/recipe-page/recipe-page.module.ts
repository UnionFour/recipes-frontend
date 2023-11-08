import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsPanelComponent } from './recommendations-panel/recommendations-panel.component';


const components = [
    RecommendationsPanelComponent
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule
    ]
})
export class RecipePageModule { }
