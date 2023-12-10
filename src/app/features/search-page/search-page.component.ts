import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../core/services/recipe.service';
import { DestroyableComponent } from '../../shared/components/destroyable-component/destroyable.component';
import { Observable, takeUntil } from 'rxjs';
import { Recipe } from '../../../gql/graphql';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent extends DestroyableComponent implements OnInit{
    private recipes$!: Observable<Recipe[]>;
    public recipes!: Recipe[];

    constructor(
        public recipeService: RecipeService
    ) {
        super()
    }
    public ngOnInit(): void {
        this.findRecipes();
    }

    public findRecipes(ingredients: string[] = []) {
        this.recipes$ = this.recipeService.find(ingredients);

        this.recipes$
            .pipe(takeUntil(this.destroy$))
            .subscribe((recipes) => this.recipes = recipes);
    }
}
