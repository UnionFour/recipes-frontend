import { Component, OnInit } from '@angular/core';
import { DeclensionsWord } from '../../../shared/pipes/declension.pipe';
import { SortMethod } from '../../../core/models/sorting/sortMethod.model';
import { RecipeSortInput, SortEnumType } from '../../../../gql/graphql';
import { SelectedSortMethod } from '../../../core/models/sorting/selectedSortMethod.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-sort-panel',
    templateUrl: './sort-panel.component.html',
    styleUrls: ['./sort-panel.component.scss']
})
export class SortPanelComponent implements OnInit{
    public recipesCount = 11;
    public value!:  SelectedSortMethod;

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
        { name: 'Калории', value: 'callories', isOrdinal: true },
        { name: 'Время', value: 'readyInMinutes', isOrdinal: true }
    ]
    
    constructor(
        public router: Router,
        public route: ActivatedRoute,

    ) {
    }

    ngOnInit(): void {
        this.value = this.route.snapshot.queryParams['sorting'] ? {
            value: this.route.snapshot.queryParams['sorting'][0],
            order: this.route.snapshot.queryParams['sorting'][1]
        } : {
            value: 'aggregateLikes',
            order: 'descending'
        }
    }

    public onChangedSortMethod(selectedSortMethod: SelectedSortMethod) {
        console.log('sort-pael', new Date())
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { sorting: [selectedSortMethod.value, selectedSortMethod.order] }, // Указываем параметр, который нужно удалить, и устанавливаем для него null
            queryParamsHandling: 'merge'
        }).then()
    }

    // private prepareSortingMethod(sortMethod: SelectedSortMethod): RecipeSortInput {
    //     return {
    //         [sortMethod.value]: sortMethod.order === 'indefinite'
    //         || sortMethod.order === 'descending' ? SortEnumType.Desc : SortEnumType.Asc
    //     };
    // }

}
