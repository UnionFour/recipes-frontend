import { Component } from '@angular/core';
import { recipes } from '../../../core/mocks/recipes.mock';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
    public recipe: any = recipes[0];
    protected readonly recipes = recipes;
}
