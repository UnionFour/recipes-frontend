import { Component } from '@angular/core';
import { recipes } from '../../../../core/mocks/recipes.mock';
@Component({
    selector: 'app-mini-recipes-list',
    templateUrl: './mini-recipes-list.component.html',
    styleUrls: ['./mini-recipes-list.component.scss']
})
export class MiniRecipesListComponent {
    public recipes: any = recipes.slice(0, 3);
}
