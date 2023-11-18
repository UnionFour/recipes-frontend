import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Recipe, RecipesConnection } from '../../../gql/graphql';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    constructor(private apollo: Apollo) {}

    public findByIngredients(ingredients: [string]): Observable<Recipe[]> {
        const ingredientsFilter = [];

        for (const ingredient of ingredients) {
            ingredientsFilter.push({ ingredients: { some: { name: { rus: { contains: ingredient } } } } });
        }

        return this.apollo
            .query<{recipes: RecipesConnection}>({
                query: gql`
                    query GetRecipes($ingredientsFilter: [RecipeFilterInput!]) {
                        recipes(first: 10, where: { or: $ingredientsFilter }) {
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
                            }
                        }
                    }
                `,
                variables: {
                    ingredientsFilter,
                },
            }).pipe(
                map(result => result.data.recipes.nodes ?? [])
            )
    }
}