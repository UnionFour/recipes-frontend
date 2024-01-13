import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { SearchPageComponent } from './search-page.component';
import {
    TuiAvatarModule,
    TuiCarouselModule,
    TuiDataListWrapperModule,
    TuiMultiSelectModule,
    TuiToggleModule
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiLinkModule, TuiLoaderModule,
    TuiSvgModule,
    TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import { RecipesListComponent } from './resipes-list/recipes-list.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { SortPanelComponent } from './sort-panel/sort-panel.component';
import { SortComponent } from './sort-panel/sort/sort.component';
import { SortMethodComponent } from './sort-panel/sort/sort-method/sort-method.component';
import { RouterLink } from '@angular/router';
import {
    IngredientsAsyncSelectComponent
} from './filter-panel/ingredients-async-select/ingredients-async-select.component';

const components = [
    SearchPageComponent,
    FilterPanelComponent,
    SortPanelComponent,
    RecipesListComponent,
    RecipeCardComponent,
    SortComponent,
    SortMethodComponent,
    IngredientsAsyncSelectComponent,
];

@NgModule({
    imports: [
        SharedModule,
        TuiToggleModule,
        ReactiveFormsModule,
        NgSwitchCase,
        NgSwitch,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapperModule,
        TuiAvatarModule,
        TuiLetModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiLoaderModule,
        RouterLink,
        TuiCarouselModule
    ],
    declarations: components
})
export class SearchPageModule {
}
