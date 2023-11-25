import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Recipe, RecipesConnection, RecipeSortInput } from '../../../gql/graphql';
import { map, Observable } from 'rxjs';

const queryFind = gql`
    query GetRecipes($ingredientsFilter: [RecipeFilterInput!], $recipeSorts: [RecipeSortInput!]) {
        recipes(first: 10, where: { or: $ingredientsFilter }, order: $recipeSorts) {
            nodes {
                id
                title {
                    rus
                }
                image
                ingredients {
                    name {
                        rus
                    }
                }
                aggregateLikes
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    constructor(private apollo: Apollo) {}

    public find(ingredients: string[], sorts: RecipeSortInput[] | null = null): Observable<Recipe[]> {
        if (sorts?.length == 0) sorts = null;

        const ingredientsFilter = [];

        for (const ingredient of ingredients) {
            ingredientsFilter.push({ ingredients: { some: { name: { rus: { contains: ingredient } } } } });
        }

        return this.apollo
            .query<{ recipes: RecipesConnection }>({
                query: queryFind,
                variables: {
                    ingredientsFilter,
                    recipeSorts: sorts,
                },
            })
            .pipe(map((result) => result.data.recipes.nodes ?? []));
    }
}