import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../core/services/recipe.service';
import { DestroyableComponent } from '../../shared/components/destroyable-component/destroyable.component';
import { switchMap, takeUntil } from 'rxjs';
import { Recipe } from '../../../gql/graphql';
import { RecipeParametersService } from '../../core/services/recipe-parameters.service';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent extends DestroyableComponent implements OnInit {
    public recipes: Recipe[] = [];
    public loading = true;
    public showRecipeCount = 10;
    public skeletonArray = Array(this.showRecipeCount);

    constructor(
        public recipeService: RecipeService,
        public recipeParametersService: RecipeParametersService
    ) {
        super();
        recipeService.$loading.subscribe((value) => this.loading = value);
    }

    public ngOnInit(): void {
        this.recipeParametersService.parameters$
            .pipe(
                switchMap((parameters) => this.recipeService.find(parameters)),
                takeUntil(this.destroy$)
            )
            .subscribe({
                next: (recipes) => this.recipes = recipes,
                error: (error) => {
                    this.loading = false;
                    console.log(error)
                }
            })
    }


}
