import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
import { Apollo } from 'apollo-angular';
import { GraphQLModule } from '../../graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SortEnumType } from '../../../gql/graphql';

test('Поиск без ингредиентов и сортировки', (done) => {
    TestBed.configureTestingModule({
        imports: [GraphQLModule, HttpClientModule],
    });
    const apollo = TestBed.inject(Apollo);

    const recipeService = new RecipeService(apollo);

    recipeService.find().subscribe((result) => {
        console.log(result);
        done();
    });
});

test('Поиск c ингредиентами и сортировкой по популярности', (done) => {
    TestBed.configureTestingModule({
        imports: [GraphQLModule, HttpClientModule],
    });
    const apollo = TestBed.inject(Apollo);

    const recipeService = new RecipeService(apollo);

    recipeService.ingredients = ['кукуруза', 'крылышки'];
    recipeService.sorts = [{ aggregateLikes: SortEnumType.Desc }];

    recipeService.find().subscribe((result) => {
        console.log(result);
        done();
    });
});

test('Получить один рецепт по id', (done) => {
    TestBed.configureTestingModule({
        imports: [GraphQLModule, HttpClientModule],
    });
    const apollo = TestBed.inject(Apollo);

    const recipeService = new RecipeService(apollo);

    recipeService.getRecipe('6535566e607944a91084f87d').subscribe((result) => {
        console.log(result);
        done();
    });
});

test('Отфилтровать рецепты по отдельным полям', (done) => {
    TestBed.configureTestingModule({
        imports: [GraphQLModule, HttpClientModule],
    });
    const apollo = TestBed.inject(Apollo);

    const recipeService = new RecipeService(apollo);

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
    TestBed.configureTestingModule({
        imports: [GraphQLModule, HttpClientModule],
    });
    const apollo = TestBed.inject(Apollo);

    const recipeService = new RecipeService(apollo);

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
