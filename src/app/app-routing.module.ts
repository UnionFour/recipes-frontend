import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { SearchPageComponent } from './features/search-page/search-page.component';
import { RecipePageComponent } from './features/recipe-page/recipe-page.component';
import { SavedRecipesPageComponent } from './features/saved-recipes-page/saved-recipes-page.component';

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
                path: 'saved',
                component: SavedRecipesPageComponent
            },
            {
                path: 'recipe/:id',
                component: RecipePageComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
