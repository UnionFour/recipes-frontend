import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
import { Apollo } from 'apollo-angular';
import { GraphQLModule } from '../../graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SortEnumType } from '../../../gql/graphql';

function getRecipeService(): RecipeService{
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
        glutenFree: { eq: true }
    };

    recipeService.find().subscribe((result) => {
        console.log(result);
        done();
    });
})

test('Строгий поиск', (done) => {
    const recipeService = getRecipeService();

    recipeService.ingredients = ['картошка', 'бекон', 'мука', 'крем', 'пекана', 'соль'];

    recipeService.filtration = {
        vegan: { eq: false },
        glutenFree: { eq: false }
    };

    recipeService.isStrict = true;

    recipeService.find().subscribe((result) => {
        console.log(result);
        done();
    });
})
