import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
import { Apollo } from 'apollo-angular';
import { GraphQLModule } from '../../graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SortEnumType } from '../../../gql/graphql';

TestBed.configureTestingModule({
    imports: [GraphQLModule, HttpClientModule],
});

const apollo = TestBed.inject(Apollo);

test('Поиск без ингредиентов и сортировки', (done) => {
    const recipeService = new RecipeService(apollo);

    recipeService.find([]).subscribe((result) => {
        console.log(result);
        done();
    });
});

test('Поиск c ингредиентами и сортировкой по популярности', (done) => {
    const recipeService = new RecipeService(apollo);

    recipeService.find(['кукуруза', 'крылышки'], [{ aggregateLikes: SortEnumType.Desc }])
        .subscribe((result) => {
            console.log(result);
            done();
        });
});

test('Поиск c ингредиентами')
