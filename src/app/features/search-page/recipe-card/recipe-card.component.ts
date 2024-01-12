import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../../gql/graphql';
import { Category, categories } from '../../../core/models/filtering/category';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
    @Input() public recipe!: Recipe;

    public recipeCategories: Category[] = [];
    public index = 0;

    ngOnInit() {
        categories.forEach((possibleCategory: Category) => {
            for (const [key, value] of Object.entries(this.recipe)) {
                if (possibleCategory.value === key && value) {
                    this.recipeCategories.push(possibleCategory);
                }
            }
        });
    }

    protected readonly Math = Math;
}
