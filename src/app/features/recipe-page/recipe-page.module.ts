import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsPanelComponent } from './recommendations-panel/recommendations-panel.component';
import { RecipePageComponent } from './recipe-page.component';


const components = [
    RecommendationsPanelComponent,
    RecipePageComponent,
    RecommendationsPanelComponent,
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule
    ]
})
export class RecipePageModule {
}
