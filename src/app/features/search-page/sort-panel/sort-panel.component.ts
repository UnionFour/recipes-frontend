import { Component } from '@angular/core';
import { DeclensionsWord } from '../../../shared/pipes/declension.pipe';
import { ISortMethod } from '../../../core/models/sorting/sortMethod.model';
import { ISelectedSortMethod } from '../../../core/models/sorting/selectedSortMethod.model';

@Component({
    selector: 'app-sort-panel',
    templateUrl: './sort-panel.component.html',
    styleUrls: ['./sort-panel.component.scss']
})
export class SortPanelComponent {
    public recipesCount = 11;

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

    public sortMethods: ISortMethod[] =
        [
            { name: 'Популярность', value: 'popularity', isOrdinal: false },
            { name: 'Калории', value: 'calories', isOrdinal: true },
            { name: 'Время', value: 'time', isOrdinal: true }
        ]

    log(event: ISelectedSortMethod) {
        console.log(event)
    }
}
