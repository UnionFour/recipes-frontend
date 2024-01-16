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
    localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkJlYXJlciJ9.eyJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUyMjkiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUyMjkiLCJleHAiOjE3MDUzNjExNzksImVtYWlsIjoicXdlcnFAZ21haWwuY29tIiwic3ViIjoiNjVhNWI1NzIyMzQxZWMwYTk1NTk2ZjYyIiwiaWF0IjoxNzA1MzYwMjc5LCJuYmYiOjE3MDUzNjAyNzl9.cZankbdjTz6cTe-qENCiapgQEmgAgLqrCp0XPTXxb00')

    userService.getFavouriteRecipes().subscribe(recipes => {
        console.log(recipes);
        done();
    })

})