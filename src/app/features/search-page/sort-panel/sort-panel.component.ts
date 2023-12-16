import { Component } from '@angular/core';
import { DeclensionsWord } from '../../../shared/pipes/declension.pipe';
import { SortMethod } from '../../../core/models/sorting/sortMethod.model';
import { RecipeSortInput, SortEnumType } from '../../../../gql/graphql';
import { RecipeParametersService } from '../../../core/services/recipe-parameters.service';
import { SelectedSortMethod } from '../../../core/models/sorting/selectedSortMethod.model';

@Component({
    selector: 'app-sort-panel',
    templateUrl: './sort-panel.component.html',
    styleUrls: ['./sort-panel.component.scss']
})
export class SortPanelComponent {
    public recipesCount = 11;

    public readonly recipeDeclensions: DeclensionsWord = {
        nominativeCase: 'рецепт',
        pluralCase: 'рецептов',
        genitiveCase: 'рецепта'
    };

    public readonly findDeclensions: DeclensionsWord = {
        nominativeCase: 'Найден',
        pluralCase: 'Найдено',
        genitiveCase: 'Найдено'
    };

    public readonly sortMethods: SortMethod[] = [
        { name: 'Популярность', value: 'aggregateLikes', isOrdinal: false },
        { name: 'Калории', value: 'calories', isOrdinal: true },
        { name: 'Время', value: 'readyInMinutes', isOrdinal: true }
    ]
    
    constructor(public recipeParametersService: RecipeParametersService) {
    }

    public onChangedSortMethod(recipeSortInput: SelectedSortMethod) {
        const preparedSortingMethod = this.prepareSortingMethod(recipeSortInput);
        this.recipeParametersService.changeSortingParameter(preparedSortingMethod);
    }

    private prepareSortingMethod(sortMethod: SelectedSortMethod): RecipeSortInput {
        return {
            [sortMethod.sortMethod.value]: sortMethod.order === 'indefinite'
            || sortMethod.order === 'descending' ? SortEnumType.Desc : SortEnumType.Asc
        };
    }
}
