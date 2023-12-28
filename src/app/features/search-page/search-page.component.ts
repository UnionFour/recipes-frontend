import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../core/services/recipe.service';
import { DestroyableComponent } from '../../shared/components/destroyable-component/destroyable.component';
import {debounceTime, switchMap, takeUntil} from 'rxjs';
import {Recipe, RecipeSortInput, SortEnumType} from '../../../gql/graphql';
import { RecipeParametersService } from '../../core/services/recipe-parameters.service';
import { ActivatedRoute, Router } from "@angular/router";
import {SelectedSortMethod} from "../../core/models/sorting/selectedSortMethod.model";
import {Category} from "../../core/models/filtering/category";

export type Parameters = {
    isSearchLoose?: boolean,
    containerMethods?: string[],
    nutritionalValues?: number[],
    categories?: string[],
    ingredients?: string[],
    sorting?: string[]
}


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
        public recipeParametersService: RecipeParametersService,
        public route: ActivatedRoute,
        public router: Router,
    ) {
        super();
        recipeService.$loading.subscribe((value) => this.loading = value);
    }

    public ngOnInit() {
        console.log('ngOnInit SearchPageComponent')

        // this.route.queryParams
        //     .pipe(
        //         switchMap((params) => {
        //             const parameters: Parameters = {
        //                 isSearchLoose: !!params['isSearchLoose'],
        //                 containerMethods: params['containerMethods'],
        //                 nutritionalValues: params['nutritionalValues'].map((nutritionalValue: string) => +nutritionalValue),
        //                 categories: params['categories'],
        //                 ingredients: params['ingredients'],
        //                 sorting: params['sorting']
        //             }
        //             console.log(parameters)
        //             return this.recipeService.find(parameters);
        //         }),
        //         takeUntil(this.destroy$)
        //     )
        //     .subscribe((res) => this.recipes = res)

        this.route.queryParams
            .subscribe((params) => {
                if (params) {
                    const parameters: Parameters = {
                        isSearchLoose: params['isSearchLoose'] === 'true',
                        containerMethods: params['containerMethods'],
                        nutritionalValues: params['nutritionalValues']?.map((nutritionalValue: string) => +nutritionalValue),
                        categories: params['categories']?.map((car: string) => {
                            const str: any = JSON.parse(car)
                            return new Category(str.title, str.value)
                        }),
                        ingredients: params['ingredients'],
                        sorting: params['sorting']
                    }
                    console.log('route.queryParams', params)
                    this.recipeService.find(parameters).subscribe((res) => this.recipes = res)
                }
            })

        // this.recipeParametersService.parameters$
        //     .pipe(
        //         switchMap((parameters) => this.recipeService.find(parameters)),
        //         takeUntil(this.destroy$)
        //     )
        //     .subscribe({
        //         next: (recipes) => this.recipes = recipes,
        //         error: (error) => {
        //             this.loading = false;
        //             console.log(error)
        //         }
        //     })
    }

    private prepareSortingMethod(sortMethod: string[]): RecipeSortInput {
        return {
            [sortMethod[0]]: sortMethod[1] === 'indefinite'
            || sortMethod[1] === 'descending' ? SortEnumType.Desc : SortEnumType.Asc
        };
    }


}
