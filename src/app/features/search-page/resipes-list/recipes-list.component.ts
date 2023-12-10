import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../gql/graphql';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
    @Input() public recipes!: Recipe[];
}
