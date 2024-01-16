import { Component, Input } from '@angular/core';
import { Recipe } from "../../../../../gql/graphql";

@Component({
    selector: 'app-mini-recipes-list',
    templateUrl: './mini-recipes-list.component.html',
    styleUrls: ['./mini-recipes-list.component.scss']
})
export class MiniRecipesListComponent {
    @Input() public recipes: Recipe[] = [];
}
