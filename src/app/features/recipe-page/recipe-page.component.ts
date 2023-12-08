import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap, takeUntil } from 'rxjs';
import { RecipeService } from '../../core/services/recipe.service';
import { Recipe } from '../../../gql/graphql';
import { DestroyableComponent } from '../../shared/components/destroyable-component/destroyable.component';

@Component({
    selector: 'app-recipe-page',
    templateUrl: './recipe-page.component.html',
    styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent extends DestroyableComponent implements OnInit {
    private recipe$!: Observable<Recipe | null>;
    public recipe!: Recipe | null;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.recipe$ = this.route.params
            .pipe(switchMap((params: Params) => {
                const recipeId = params['id'];
                return this.recipeService.getRecipe(recipeId);
            }))

        this.recipe$.pipe(takeUntil(this.destroy$))
            .subscribe((recipe) => this.recipe = recipe);
    }
}
