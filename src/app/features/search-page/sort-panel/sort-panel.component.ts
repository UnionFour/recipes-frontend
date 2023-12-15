import { Component, EventEmitter, Output } from '@angular/core';
import { DeclensionsWord } from '../../../shared/pipes/declension.pipe';
import { SortMethod } from '../../../core/models/sorting/sortMethod.model';
import { RecipeSortInput } from '../../../../gql/graphql';
import { RecipeParametersService } from '../../../core/services/recipe-parameters.service';

@Component({
    selector: 'app-sort-panel',
    templateUrl: './sort-panel.component.html',
    styleUrls: ['./sort-panel.component.scss']
})
export class SortPanelComponent {
    public recipesCount = 11;

    @Output() changedSortMethod = new EventEmitter<RecipeSortInput>;
    
    constructor(public recipeParametersService: RecipeParametersService) {
    }

    public recipeDeclensions: DeclensionsWord = {
        nominativeCase: 'рецепт',
        pluralCase: 'рецептов',
        genitiveCase: 'рецепта'
    };

    public findDeclensions: DeclensionsWord = {
        nominativeCase: 'Найден',
        pluralCase: 'Найдено',
        genitiveCase: 'Найдено'
    };

    public sortMethods: SortMethod[] =
        [
            { name: 'Популярность', value: 'aggregateLikes', isOrdinal: false },
            { name: 'Калории', value: 'calories', isOrdinal: true },
            { name: 'Время', value: 'readyInMinutes', isOrdinal: true }
        ]

    onChangedSortMethod(recipeSortInput: RecipeSortInput) {
        this.recipeParametersService.changeSortingParameter(recipeSortInput);
    }
}
