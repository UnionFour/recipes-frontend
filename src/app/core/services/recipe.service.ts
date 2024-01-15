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
import { ISelectItem } from '../models/filtering/selectItem.model';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    public hasNextPage = false;
    public $loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    public lastRecipes: Recipe[] = [];
    public totalCount = new BehaviorSubject<number>(0);

    private cursor: string | null = null;

    constructor(private apollo: Apollo) {}

    public find(parameters: RecipeParameters, nextPage = false): Observable<Recipe[]> {
        if (!nextPage) this.cursor = null;

        const containedIngredients: StringOperationFilterInput[] =  parameters.ingredients.map(
            (ingredient) => new Object({ contains: ingredient }),
        );

        const ingredientsFilter: RecipeFilterInput = parameters.isSearchLoose
            ? { ingredients: { some: { name: { rus: { or: containedIngredients } } } } }
            : { ingredients: { all: { name: { rus: { or: containedIngredients } } } } };

        const filterInput: RecipeFilterInput = { and: [] };

        filterInput.and = [{ callories: { gte: parameters.nutritionalValues[0] } },
            { callories: { lte: parameters.nutritionalValues[1] } }]

        if (containedIngredients.length > 0)
            filterInput.and?.push(ingredientsFilter);

        if (parameters.recipeName)
            filterInput.and.push({ title: { rus: { contains: parameters.recipeName } } });

        this.clearCategories(filterInput);

        parameters.categories.forEach((category) => {
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

            if (category.value === 'veryPopular') {
                filterInput.veryPopular = { eq: true }
            }

        })

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
                    this.totalCount.next(recipes.totalCount);

                    return recipes.nodes ?? [];
                }),
                tap((result: Recipe[]) => {
                    this.$loading.next(false);
                    this.lastRecipes = result.slice(0, 4);
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

    private clearCategories(filterInput: RecipeFilterInput) {
        filterInput.vegetarian = undefined
        filterInput.vegan = undefined
        filterInput.glutenFree = undefined
        filterInput.dairyFree = undefined
        filterInput.veryHealthy = undefined
        filterInput.veryPopular = undefined
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


    public findIngredients(name: string | null): Observable<string[]> {
        return this.apollo
            .query<{ ingredients: IngredientCollection[] }>({
                query: queryFindIngredients,
                variables: {
                    name
                }
            })
            .pipe(map((result) =>
                result.data.ingredients.map((ingredient) =>
                    ingredient.id) ?? []));
    }
}
