import {Component, OnInit} from '@angular/core';
import {RecipeService} from "./core/services/recipe.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public recipeService: RecipeService) {
        recipeService.findByRecipeName('Мороженое').subscribe((res) => console.log(res));
    }
}
