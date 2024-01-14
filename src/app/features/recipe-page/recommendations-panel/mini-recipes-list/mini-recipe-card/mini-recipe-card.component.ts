import { Component, Input, OnInit } from '@angular/core';
import { Ingredient, Recipe } from '../../../../../../gql/graphql';

@Component({
    selector: 'app-mini-recipe-card',
    templateUrl: './mini-recipe-card.component.html',
    styleUrls: ['./mini-recipe-card.component.scss']
})
export class MiniRecipeCardComponent implements OnInit{
    public ingredientsString!: string;

    @Input() public recipe!: Recipe;

    public ngOnInit(): void {
        this.ingredientsString = this.createIngredientsString(this.recipe.ingredients!)
    }

    private createIngredientsString(ingredients: Ingredient[] = []) {
        return ingredients.map((ingredient: any) => ingredient.name?.rus).join(', ')
    }

    protected readonly Math = Math;
}
