import { Component } from '@angular/core';
import { recipes } from '../../../core/mocks/recipes.mock';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
    public recipes: any = recipes;
}
