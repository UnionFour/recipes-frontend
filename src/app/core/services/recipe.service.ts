import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import {
    Recipe,
    RecipeFilterInput,
    RecipesConnection,
    RecipeSortInput,
    StringOperationFilterInput,
} from '../../../gql/graphql';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { queryFind, queryGet } from './recipe.queries';

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

    public find(parameters: params): Observable<Recipe[]> {
        if (parameters.sorts?.length == 0) parameters.sorts = null;

        const containedIngredients: StringOperationFilterInput[] = parameters.ingredients.map(
            (ingredient) => new Object({ contains: ingredient }),
        );

        const ingredientsFilter: RecipeFilterInput = parameters.isStrict
            ? { ingredients: { all: { name: { rus: { or: containedIngredients } } } } }
            : { ingredients: { some: { name: { rus: { or: containedIngredients } } } } };

        const filterInput: RecipeFilterInput = { and: [] };

        if (containedIngredients.length > 0)
            filterInput.and?.push(ingredientsFilter);

        if (parameters.filtration != null)
            filterInput.and?.push(parameters.filtration);

        this.$loading.next(true);
        return this.apollo
            .query<{ recipes: RecipesConnection }>({
                query: queryFind,
                variables: {
                    filtration: filterInput,
                    recipeSorts: parameters.sorts,
                },
            })
            .pipe(
                map((result) => result.data.recipes.nodes ?? []),
                tap(() => {
                    this.$loading.next(false);
                }),
            );
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
