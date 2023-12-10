import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Recipe, RecipesConnection, RecipeSortInput } from '../../../gql/graphql';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

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
    query GetRecipes($searchCount: Int!, $ingredientsFilter: [RecipeFilterInput!], $recipeSorts: [RecipeSortInput!]) {
        recipes(first: $searchCount, where: { or: $ingredientsFilter }, order: $recipeSorts) {
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
    public $loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    constructor(
        private apollo: Apollo
    ) {
    }

    public find(searchCount: number, ingredients: string[], sorts: RecipeSortInput[] | null = null): Observable<Recipe[]> {
        if (sorts?.length == 0) sorts = null;

        const ingredientsFilter = [];

        for (const ingredient of ingredients) {
            ingredientsFilter.push({ ingredients: { some: { name: { rus: { contains: ingredient } } } } });
        }

        this.$loading.next(true);
        return this.apollo
            .query<{ recipes: RecipesConnection }>({
                query: queryFind,
                variables: {
                    searchCount,
                    ingredientsFilter,
                    recipeSorts: sorts,
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
