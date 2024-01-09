import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import {
    IngredientCollection,
    Recipe,
    RecipeFilterInput,
    RecipesConnection,
    RecipeSortInput, SortEnumType,
    StringOperationFilterInput,
} from '../../../gql/graphql';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { RecipeParameters } from '../models/filtering/recipeParameters';
import { queryFind, queryFindIngredients, queryGet } from './recipe.queries';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    public hasNextPage = false;
    public $loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    private cursor: string | null = null;

    constructor(private apollo: Apollo) {}

    public find(parameters: RecipeParameters, nextPage = false): Observable<Recipe[]> {
        if (!nextPage) this.cursor = null;

        console.log('find',parameters)

        let containedIngredients!: StringOperationFilterInput[];
        if (parameters.ingredients) {
            containedIngredients = parameters.ingredients.map(
                (ingredient) => new Object({ contains: ingredient }),
            );
        }
        else {
            containedIngredients = []
        }
        const ingredientsFilter: RecipeFilterInput = parameters.isSearchLoose
            ? { ingredients: { some: { name: { rus: { or: containedIngredients } } } } }
            : { ingredients: { all: { name: { rus: { or: containedIngredients } } } } };

        const filterInput: RecipeFilterInput = { and: [] };

        if (containedIngredients.length > 0) filterInput.and?.push(ingredientsFilter);

        filterInput.vegetarian = undefined
        filterInput.vegan = undefined
        filterInput.glutenFree = undefined
        filterInput.dairyFree = undefined
        filterInput.veryHealthy = undefined
        filterInput.cheap = undefined
        filterInput.veryPopular = undefined


        parameters.categories?.forEach((category) => {
            if (category.value === 'vegetarian') {
                filterInput.vegetarian = { eq: true }
            }

            if (category.value === 'vegan') {
                filterInput.vegan = { eq: true }
            }

            if (category.value === 'glutenFree') {
                filterInput.glutenFree = { eq: true }
            }

            if (category.value === 'dairyFree') {
                filterInput.dairyFree = { eq: true }
            }

            if (category.value === 'veryHealthy') {
                filterInput.veryHealthy = { eq: true }
            }

            if (category.value === 'cheap') {
                filterInput.cheap = { eq: true }
            }

            if (category.value === 'veryPopular') {
                filterInput.veryPopular = { eq: true }
            }

        })

        // if (parameters.filtration != null)
        //     filterInput.and?.push(parameters.filtration);

        this.$loading.next(true);
        return this.apollo
            .query<{ recipes: RecipesConnection }>({
                query: queryFind,
                variables: {
                    filtration: filterInput,
                    recipeSorts: this.prepareSortingMethod(parameters.sorting),
                    cursor: this.cursor,
                },
            })
            .pipe(
                map((result) =>  {
                    const recipes = result.data.recipes;
                    this.hasNextPage = recipes.pageInfo.hasNextPage;
                    this.cursor = recipes.pageInfo.endCursor ?? '';

                    return recipes.nodes ?? [];
                }),
                tap(() => {
                    this.$loading.next(false);
                }),
            );
    }

    private prepareSortingMethod(sortMethod: string[] | undefined): RecipeSortInput | undefined {
        if (sortMethod) {
            return { [sortMethod[0]]: sortMethod[1] === 'indefinite'
            || sortMethod[1] === 'descending' ? SortEnumType.Desc : SortEnumType.Asc }
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


    public findIngredients(name: string): Observable<IngredientCollection[]> {
        return this.apollo
            .query<{ ingredients: IngredientCollection[] }>({
                query: queryFindIngredients,
                variables: {
                    name
                }
            })
            .pipe(map((result) => result.data.ingredients ?? []));
    }
}
