import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../../../../gql/graphql';
import { Category, categories } from '../../../../core/models/filtering/category';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, AfterViewInit {
    @Input() public recipe!: Recipe;

    public recipeCategories: Category[] = [];
    public scrollIndex = 0;
    public imaginaryIndex = 0;

    private ingredientsCoords: number[] = [];
    private endIngredientCoord: number = 0;

    ngOnInit() {
        categories.forEach((possibleCategory: Category) => {
            for (const [key, value] of Object.entries(this.recipe)) {
                if (possibleCategory.value === key && value) {
                    this.recipeCategories.push(possibleCategory);
                }
            }
        });
    }

    ngAfterViewInit() {
        this.setIngredientCoordinates();
    }

    protected readonly Math = Math;

    public scrollIngredients(diff: number = 1) {
        this.scrollIndex += diff;
        const ingredients = document.getElementById(`ingredients${this.recipe.id}`);
        if (ingredients) {
            const ingredientsStart = ingredients.getBoundingClientRect().x;
            const ingredientsWidth = ingredients.getBoundingClientRect().width + 20;
            const xCoordination = this.ingredientsCoords[this.scrollIndex] - ingredientsStart;

            let prevValue: number = this.ingredientsCoords[this.scrollIndex - diff] - ingredientsStart;
            let remainder: number = 0;
            const remainderArray = diff > 0 ?
                this.ingredientsCoords.slice(this.scrollIndex) : this.ingredientsCoords.slice(0, this.scrollIndex);
            remainderArray.push(this.endIngredientCoord);

            remainderArray.forEach((curValue) => {
                curValue -= ingredientsStart;
                remainder += curValue - prevValue;
                prevValue = curValue;
            });

            if (xCoordination >= 0) {
                ingredients.scroll({ left: xCoordination });
                if (diff > 0 && remainder < ingredientsWidth) {
                    this.imaginaryIndex = this.recipe.ingredients!.length;
                } else if (diff < 0 && this.imaginaryIndex === this.recipe.ingredients!.length) {
                    this.imaginaryIndex = this.scrollIndex;
                }
            }
        }
    }

    private setIngredientCoordinates() {
        this.recipe.ingredients?.forEach((ingredient, index) => {
            const element = document.getElementById(`ingredient${index}`);
            if (element) {
                this.ingredientsCoords.push(element.getBoundingClientRect().x);

                if (index === this.recipe.ingredients!.length - 1) {
                    this.endIngredientCoord = element.getBoundingClientRect().right;
                }
            }
        });
    }
}
