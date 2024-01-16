import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AddFavouriteRecipePayload, Recipe } from '../../../gql/graphql';
import { Apollo, gql } from 'apollo-angular';
import { recipeFragment } from './recipe.queries';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private apollo: Apollo) {
    }

    public getFavouriteRecipes(): Observable<Recipe[]> {
        return this.apollo
            .query<{ favouriteRecipes: Recipe[] }>({
                query: gql`
                    query {
                        favouriteRecipes {
                            ...RecipeInfo
                        }
                    }
                    ${recipeFragment}
                `,
            })
            .pipe(map((result) => result.data.favouriteRecipes ?? []));
    }

    public addFavouriteRecipe(id: string): Observable<Recipe | null> {
        return this.apollo
            .mutate<{ addFavouriteRecipe: AddFavouriteRecipePayload }>({
                mutation: gql`
                    mutation addFavouriteRecipe($id: String!) {
                        addFavouriteRecipe(input: { id: $id }) {
                            recipe {
                                ...RecipeInfo
                            }
                        }
                    }
                    ${recipeFragment}
                `,
                variables: {
                    id
                }
            })
            .pipe(map(result => result.data?.addFavouriteRecipe.recipe ?? null))

    }
}
