import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import {
    Recipe,
    RecipeFilterInput,
    RecipesConnection,
    RecipeSortInput, SortEnumType,
    StringOperationFilterInput,
} from '../../../gql/graphql';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { queryFind, queryGet } from './recipe.queries';
import { RecipeParameters } from '../models/filtering/recipeParameters';


export type params = {
    ingredients: string[],
    sorts: RecipeSortInput[] | null,
    filtration: RecipeFilterInput | null,
    isStrict: boolean,
}


@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    public $loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    constructor(private apollo: Apollo) {}

    public find(parameters: RecipeParameters): Observable<Recipe[]> {
        console.log('find',parameters)
        let containedIngredients!: StringOperationFilterInput[];
        if (parameters.ingredients) {
            if (typeof parameters.ingredients == 'string') {
                containedIngredients = [new Object({ contains: parameters.ingredients })]
            } else {
                containedIngredients = parameters.ingredients.map(
                    (ingredient) => new Object({ contains: ingredient }),
                );
            }
        }
        else {
            containedIngredients = []
        }
        const ingredientsFilter: RecipeFilterInput = parameters.isSearchLoose
            ? { ingredients: { some: { name: { rus: { or: containedIngredients } } } } }
            : { ingredients: { all: { name: { rus: { or: containedIngredients } } } } };

        const filterInput: RecipeFilterInput = { and: [] };

        if (containedIngredients.length > 0)
            filterInput.and?.push(ingredientsFilter);

        // if (parameters.filtration != null)
        //     filterInput.and?.push(parameters.filtration);

        this.$loading.next(true);
        return this.apollo
            .query<{ recipes: RecipesConnection }>({
                query: queryFind,
                variables: {
                    filtration: filterInput,
                    recipeSorts: this.prepareSortingMethod(parameters.sorting),
                },
            })
            .pipe(
                map((result) => result.data.recipes.nodes ?? []),
                tap(() => {
                    this.$loading.next(false);
                }),
            );
    }

    private prepareSortingMethod(sortMethod: string[] | undefined): RecipeSortInput | undefined {
        if (sortMethod) {
            return { [sortMethod[0]]: sortMethod[1] === 'indefinite'
            || sortMethod[1] === 'descending' ? SortEnumType.Desc : SortEnumType.Asc} 
        } else {
            return undefined
        }
    
    }

    public getRecipe(recipeId: string): Observable<Recipe | null> {
        return this.apollo
            .query<{ recipes: RecipesConnection }>({
                query: queryGet,
                variables: {
                    recipeId,
                },
            })
            .pipe(map((result) => result.data.recipes.nodes?.at(0) ?? null));
    }
}
