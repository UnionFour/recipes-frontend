import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RecipeFilterInput, RecipeSortInput, SortEnumType } from '../../../gql/graphql';
import { RecipeParameters } from '../models/recipe/recipeParameters';

@Injectable({
    providedIn: 'root'
})
export class RecipeParametersService {
    private readonly initialParameters = {
        ingredients: [],
        sorts: [{ aggregateLikes: SortEnumType.Desc }],
        filtration: null,
        isStrict: false
    };

    private parametersSubject = new BehaviorSubject<RecipeParameters>(this.initialParameters)
    public readonly parameters$ = this.parametersSubject.asObservable();

    changeSortingParameter(newSortingParameter: RecipeSortInput) {
        this.parametersSubject.next({ ...this.parametersSubject.getValue(), sorts: [newSortingParameter] });
    }

    // changeFilteringParameter(newFilteringParameter: RecipeFilterInput) {
    //     this.parametersSubject.next({ ...this.parametersSubject.getValue(), filtration: newFilteringParameter });
    // }

    // addIngredient(ingredient: string) {
    //     this.parametersSubject.next({ ...this.parametersSubject.getValue(), filteringParameter: newFilteringParameter });
    // }


}
