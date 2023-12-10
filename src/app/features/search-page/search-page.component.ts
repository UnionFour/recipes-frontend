import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../core/services/recipe.service';
import {DestroyableComponent} from '../../shared/components/destroyable-component/destroyable.component';
import {Observable, takeUntil} from 'rxjs';
import {Recipe, RecipeSortInput, SortEnumType} from '../../../gql/graphql';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent extends DestroyableComponent implements OnInit{
    public recipes!: Recipe[];
    public loading: boolean = true;

    constructor(
        public recipeService: RecipeService
    ) {
        super();
    }
    public ngOnInit(): void {
        this.findRecipes();
    }

    public findRecipes(ingredients: string[] = [], recipeSortInput: RecipeSortInput = { likes: SortEnumType.Asc }) {
        this.recipeService.find(ingredients, [recipeSortInput])
            .pipe(takeUntil(this.destroy$))
            .subscribe((recipes) => {
                this.loading = false;
                this.recipes = recipes;
            });
    }
}
