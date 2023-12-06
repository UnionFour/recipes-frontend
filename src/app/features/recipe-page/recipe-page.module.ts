import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsPanelComponent } from './recommendations-panel/recommendations-panel.component';
import { RecipePageComponent } from './recipe-page.component';
import { MiniRecipesListComponent } from './recommendations-panel/mini-recipes-list/mini-recipes-list.component';
import {
    MiniRecipeCardComponent
} from './recommendations-panel/mini-recipes-list/mini-recipe-card/mini-recipe-card.component';
import {RouterLink} from "@angular/router";
import {RecipeComponent} from "./recipe/recipe.component";
import {NutrientsComponent} from "./recipe/nutrients/nutrients.component";
import {NutrientComponent} from "./recipe/nutrients/nutrient/nutrient.component";


const components = [
    RecipePageComponent,
    RecommendationsPanelComponent,
    MiniRecipesListComponent,
    MiniRecipeCardComponent,
    RecipeComponent,
    NutrientsComponent,
    NutrientComponent
];

@NgModule({
    declarations: [
        components,
        RecipeComponent
    ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class RecipePageModule {
}
