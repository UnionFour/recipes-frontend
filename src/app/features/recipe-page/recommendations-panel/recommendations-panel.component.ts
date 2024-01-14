import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../core/services/recipe.service';
import { Recipe } from '../../../../gql/graphql';
import { ActivatedRoute } from '@angular/router';
import { RecipeParameters } from '../../../core/models/filtering/recipeParameters';

@Component({
    selector: 'app-recommendations-panel',
    templateUrl: './recommendations-panel.component.html',
    styleUrls: ['./recommendations-panel.component.scss']
})
export class RecommendationsPanelComponent implements OnInit {
    public curId: string = '';
    public moreRecipes: Recipe[] = [];

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) {
    }

    ngOnInit() {
        this.curId = this.route.snapshot.params['id'];
        if (!this.recipeService.lastRecipes.length) {
            this.recipeService.find(this.getDefaultParameters()).subscribe(() => {
                this.moreRecipes = this.recipeService.lastRecipes;
                this.filterRecipes();
            });
        } else {
            this.filterRecipes();
        }

        this.route.url.subscribe(() => {
            this.curId = this.route.snapshot.params['id'];
            this.filterRecipes();
        });
    }

    private getDefaultParameters(): RecipeParameters {
        return {
            "isSearchLoose": true,
            "nutritionalValues": [
                0,
                1300
            ],
            "categories": [],
            "ingredients": []
        };
    }

    private filterRecipes() {
        this.moreRecipes = this.recipeService.lastRecipes.filter((v: Recipe) => v.id !== this.curId);
    }
}
