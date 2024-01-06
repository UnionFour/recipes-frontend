import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
import { Apollo } from 'apollo-angular';
import { GraphQLModule } from '../../graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { Recipe, SortEnumType } from '../../../gql/graphql';
import { concat } from 'rxjs';

function getRecipeService(): RecipeService {
    TestBed.configureTestingModule({
        imports: [GraphQLModule, HttpClientModule],
    });

    const apollo = TestBed.inject(Apollo);

    return new RecipeService(apollo);
}

test('Поиск без ингредиентов и сортировки', (done) => {
    const recipeService = getRecipeService();

    recipeService.find().subscribe((result) => {
        console.log(result);
        done();
    });
});

test('Поиск c ингредиентами и сортировкой по популярности', (done) => {
    const recipeService = getRecipeService();

    recipeService.ingredients = ['кукуруза', 'крылышки'];
    recipeService.sorts = [{ aggregateLikes: SortEnumType.Desc }];

    recipeService.find().subscribe((result) => {
        console.log(result);
        done();
    });
});

test('Получить один рецепт по id', (done) => {
    const recipeService = getRecipeService();

    recipeService.getRecipe('6535566e607944a91084f87d').subscribe((result) => {
        console.log(result);
        done();
    });
});

test('Отфилтровать рецепты по отдельным полям', (done) => {
    const recipeService = getRecipeService();

    recipeService.filtration = {
        vegan: { eq: false },
        glutenFree: { eq: true },
    };

    recipeService.find().subscribe((result) => {
        console.log(result);
        done();
    });
});

test('Строгий поиск', (done) => {
    const recipeService = getRecipeService();

    recipeService.ingredients = ['картошка', 'бекон', 'мука', 'крем', 'пекана', 'соль'];

    recipeService.filtration = {
        vegan: { eq: false },
        glutenFree: { eq: false },
    };

    recipeService.isStrict = true;

    recipeService.find().subscribe((result) => {
        console.log(result);
        done();
    });
});

test('Диапозон калорий от 800 до 840 ккал', (done) => {
    const recipeService = getRecipeService();

    const min = 800;
    const max = 840;

    recipeService.filtration = {
        and: [{ callories: { gte: min } }, { callories: { lte: max } }],
    };

    recipeService.find().subscribe((result) => {
        const recipe = result.at(0);
        const callories = recipe?.callories ?? 0;

        expect(callories).toBeGreaterThanOrEqual(min);
        expect(callories).toBeLessThanOrEqual(max);
        done();
    });
});

test('Получение следующей страницы данных', (done) => {
    const recipeService = getRecipeService();

    const firstPage = recipeService.find();
    const nextPage = recipeService.find(true);

    let recipes: Recipe[] = [];

    concat(firstPage, nextPage).subscribe({
        next(result) {
            recipes = recipes.concat(result);
        },
        complete() {
            const firstRecipe = recipes[0];
            const nextRecipe = recipes[(recipes.length / 2) - 1];

            expect(firstRecipe).not.toBe(nextRecipe);

            console.log(recipes);
            done();
        },
    });
});