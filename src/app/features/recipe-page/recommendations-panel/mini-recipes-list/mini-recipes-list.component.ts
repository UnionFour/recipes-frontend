import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mini-recipes-list',
    templateUrl: './mini-recipes-list.component.html',
    styleUrls: ['./mini-recipes-list.component.scss']
})
export class MiniRecipesListComponent {
    @Input() public recipes: any = [];
}
