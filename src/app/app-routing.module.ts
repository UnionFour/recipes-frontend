import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { SearchPageComponent } from './features/search-page/search-page.component';
import { RecipePageComponent } from './features/recipe-page/recipe-page.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: SearchPageComponent
            },
            {
                path: 'recipe/:id',
                component: RecipePageComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
