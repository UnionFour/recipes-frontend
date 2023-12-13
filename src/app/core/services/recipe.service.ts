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

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    public $loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    public ingredients: string[] = [];
    public sorts: RecipeSortInput[] | null = null;
    public filtration: RecipeFilterInput | null = null;
    public isStrict = false;

    constructor(private apollo: Apollo) {}

    public find(showRecipeCount: number, ingredients: string[], recipeSortInputs: RecipeSortInput[]): Observable<Recipe[]> {
        if (this.sorts?.length == 0) this.sorts = null;

        const containedIngredients: StringOperationFilterInput[] = this.ingredients.map(
            (ingredient) => new Object({ contains: ingredient }),
        );

        const ingredientsFilter: RecipeFilterInput = this.isStrict
            ? { ingredients: { all: { name: { rus: { or: containedIngredients } } } } }
            : { ingredients: { some: { name: { rus: { or: containedIngredients } } } } };

        const filterInput: RecipeFilterInput = { and: [] };

        if (containedIngredients.length > 0)
            filterInput.and?.push(ingredientsFilter);

        if (this.filtration != null)
            filterInput.and?.push(this.filtration);

        this.$loading.next(true);
        return this.apollo
            .query<{ recipes: RecipesConnection }>({
                query: queryFind,
                variables: {
                    filtration: filterInput,
                    recipeSorts: this.sorts,
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
