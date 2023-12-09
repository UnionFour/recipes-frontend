import { Component, Input } from '@angular/core';
import { Ingredient } from '../../../../../gql/graphql';

@Component({
    selector: 'app-ingredients-list',
    templateUrl: './ingredients-list.component.html',
    styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent {
    @Input() public ingredients!: Ingredient[];
}
