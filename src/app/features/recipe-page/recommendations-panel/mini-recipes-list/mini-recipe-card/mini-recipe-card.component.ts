import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-mini-recipe-card',
    templateUrl: './mini-recipe-card.component.html',
    styleUrls: ['./mini-recipe-card.component.scss']
})
export class MiniRecipeCardComponent implements OnInit{
    public ingredientsString!: string;

    @Input() public recipe: any;

    public ngOnInit(): void {
        this.ingredientsString = this.createIngredientsString(this.recipe.ingredients)
    }

    private createIngredientsString(ingredients: any) {
        return ingredients.map((ingredient: any) => ingredient.name).join(', ')
    }

}
