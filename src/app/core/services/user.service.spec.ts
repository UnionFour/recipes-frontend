import { UserService } from './user.service';
import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { GraphQLModule } from '../../graphql.module';
import { HttpClientModule } from '@angular/common/http';

function getUserService(): UserService {
    TestBed.configureTestingModule({
        imports: [GraphQLModule, HttpClientModule],
    });

    const apollo = TestBed.inject(Apollo);

    return new UserService(apollo);
}

test('get favourite recipes', (done) => {
    const userService = getUserService();

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkJlYXJlciJ9.eyJhdWQiOiJodHRwOi8vbG9jYWxob3N0IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdCIsImV4cCI6MTcwNTM3OTYzOSwiZW1haWwiOiJkdWJza2lraHNlbXlvbkBnbWFpbC5jb20iLCJzdWIiOiI2NWE2MDI0MzBkNjExYjNlNDY0M2RjM2EiLCJpYXQiOjE3MDUzNzg3MzksIm5iZiI6MTcwNTM3ODczOX0.VawJ6fyVoPmSyucY5ckWt_i9dMUO9K_6tcJFhULsZmk';
    localStorage.setItem('accessToken', token);

    userService.getFavouriteRecipes().subscribe(recipes => {
        console.log(recipes);
        done();
    })

})

test('add favourite recipe', (done) => {
    const userService = getUserService();

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkJlYXJlciJ9.eyJhdWQiOiJodHRwOi8vbG9jYWxob3N0IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdCIsImV4cCI6MTcwNTM3OTYzOSwiZW1haWwiOiJkdWJza2lraHNlbXlvbkBnbWFpbC5jb20iLCJzdWIiOiI2NWE2MDI0MzBkNjExYjNlNDY0M2RjM2EiLCJpYXQiOjE3MDUzNzg3MzksIm5iZiI6MTcwNTM3ODczOX0.VawJ6fyVoPmSyucY5ckWt_i9dMUO9K_6tcJFhULsZmk';
    localStorage.setItem('accessToken', token);


    userService.addFavouriteRecipe('6535566e607944a91084f87b').subscribe(recipes => {
        console.log(recipes);
        done();
    })
})
