import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RecipeFilterInput, RecipeSortInput, SortEnumType } from '../../../gql/graphql';

export type RecipeParameters = {
    ingredients: string[],
    sorts: RecipeSortInput[] | null,
    filtration: RecipeFilterInput | null,
    isStrict: boolean,
}

@Injectable({
    providedIn: 'root'
})
export class RecipeParametersService {
    private parametersSubject = new BehaviorSubject<RecipeParameters>
    ({ ingredients: [], sorts: [{ aggregateLikes: SortEnumType.Desc }], filtration: null, isStrict: false });
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
