import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IRecipe } from '../../core/models/recipe/recipe.model';
import { ObjectId } from '../../core/models/recipe/objectId.model';

@Component({
    selector: 'app-recipe-page',
    templateUrl: './recipe-page.component.html',
    styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit{
    recipe$!: Observable<any>
    recipe!: IRecipe
    recipeId!: ObjectId
    constructor(
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.recipe$ = this.route.params
            .pipe(switchMap((params: Params) => {
                this.recipeId = new ObjectId(params['id']);
                return new Observable()
            }))
    }
}
