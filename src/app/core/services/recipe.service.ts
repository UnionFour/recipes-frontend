import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import {
    Recipe,
    RecipeFilterInput,
    RecipesConnection,
    RecipeSortInput,
    StringOperationFilterInput,
} from '../../../gql/graphql';
import { map, Observable } from 'rxjs';
import { queryFind, queryGet } from './recipe.queries';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    public ingredients: string[] = [];
    public sorts: RecipeSortInput[] | null = null;
    public filtration: RecipeFilterInput | null = null;
    public isStrict = false;

    constructor(private apollo: Apollo) {}

    public find(): Observable<Recipe[]> {
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
