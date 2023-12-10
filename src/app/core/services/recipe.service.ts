import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Recipe, RecipesConnection, RecipeSortInput } from '../../../gql/graphql';
import { map, Observable } from 'rxjs';

const recipeFragment = gql`
    fragment RecipeInfo on Recipe {
        id
        vegetarian
        vegan
        glutenFree
        dairyFree
        title {
            rus
        }
        image
        ingredients {
            name {
                rus
            }
            image
            amount
            unit {
                rus
            }
        }
        readyInMinutes
        preparationMinutes
        cookingMinutes
        servings
        pricePerServing {
            rub
        }
        instructions {
            name {
                rus
            }
            steps {
                number
                description {
                    rus
                }
                ingredients {
                    id
                    name {
                        rus
                    }
                    image
                    amount
                    unit {
                        rus
                    }
                }
                equipments {
                    id
                    name {
                        rus
                    }
                    image
                }
                length {
                    number
                    unit {
                        rus
                    }
                }
            }
        }
        spoonacularSourceUrl
        aggregateLikes
    }
`;

const queryFind = gql`
    query GetRecipes($ingredientsFilter: [RecipeFilterInput!], $recipeSorts: [RecipeSortInput!]) {
        recipes(first: 10, where: { or: $ingredientsFilter }, order: $recipeSorts) {
            nodes {
                ...RecipeInfo
            }
        }
    }
    ${recipeFragment}
`;

const queryGet = gql`
    query GetRecipe($recipeId: String!) {
        recipes(first: 1, where: { id: { eq: $recipeId } }) {
            nodes {
                ...RecipeInfo
            }
        }
    }
    ${recipeFragment}
`;

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    constructor(
        private apollo: Apollo
    ) {
    }

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