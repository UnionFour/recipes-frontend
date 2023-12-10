import { Component, Input, OnInit } from '@angular/core';
import { categories, Category } from '../../../core/mocks/categories.mock';
import { Recipe } from '../../../../gql/graphql';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
    @Input() public recipe!: Recipe;

    public recipeCategories: Category[] = [];

    ngOnInit() {
        categories.forEach((possibleCategory: Category) => {
            for (const [key, value] of Object.entries(this.recipe)) {
                if (possibleCategory.alias === key && value) {
                    this.recipeCategories.push(possibleCategory);
                }
            }
        });
    }
}
