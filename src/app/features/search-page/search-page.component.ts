import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter, switchMap, takeUntil } from 'rxjs';

import { RecipeService } from '../../core/services/recipe.service';
import { DestroyableComponent } from '../../shared/components/destroyable-component/destroyable.component';
import { Recipe } from '../../../gql/graphql';
import { Category } from '../../core/models/filtering/category';
import {RecipeParameters} from "../../core/models/filtering/recipeParameters";

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent extends DestroyableComponent implements OnInit {
    public recipes: Recipe[] = [];
    public loading = true;
    public showRecipeCount = 10;
    public skeletonArray = Array(this.showRecipeCount);

    constructor(
        public recipeService: RecipeService,
        public route: ActivatedRoute,
        public router: Router,
    ) {
        super();
    }

    public ngOnInit() {
        this.recipeService.$loading.pipe(
            takeUntil(this.destroy$)
        ).subscribe((isLoading) => this.loading = isLoading);

        this.route.queryParams.pipe(
            filter((params) => !!params),
            switchMap((params) => this.getRecipes(params)),
            takeUntil(this.destroy$)
        ).subscribe((recipes) => this.recipes = recipes);
    }

    private getRecipes(params: Params){
        const RecipeParameters: RecipeParameters = {
            isSearchLoose: params['isSearchLoose'] === 'true',
            containerMethods: params['containerMethods'],
            nutritionalValues: this.parseNutritionalValues(params['nutritionalValues']),
            categories: this.parseCategories(params['categories']),
            ingredients: params['ingredients'],
            sorting: params['sorting']
        };

        return this.recipeService.find(RecipeParameters);
    }

    private parseNutritionalValues(nutritionalValues: string[] | undefined): number[] {
        return nutritionalValues ? nutritionalValues.map((nutritionalValue: string) =>
            +nutritionalValue) : [];
    }

    private parseCategories(categories: string[] | undefined): Category[] {
        return categories ? categories.map((car: string) => {
            const parsedCategories = JSON.parse(car);
            return new Category(parsedCategories.title, parsedCategories.value);
        }) : [];
    }
}
