import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { SortPanelComponent } from './sort-panel/sort-panel.component';
import { SearchPageComponent } from './search-page.component';
import { TuiAvatarModule, TuiDataListWrapperModule, TuiMultiSelectModule, TuiToggleModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import { RecipesListComponent } from './resipes-list/recipes-list.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

const components = [
    SearchPageComponent,
    FilterPanelComponent,
    SortPanelComponent,
    RecipesListComponent,
    RecipeCardComponent
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
        TuiLetModule
    ],
    declarations: components
})
export class SearchPageModule {
}
