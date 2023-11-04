import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { SortPanelComponent } from './sort-panel/sort-panel.component';
import { SearchPageComponent } from './search-page.component';

const components = [
    SearchPageComponent,
    FilterPanelComponent,
    SortPanelComponent
];

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: components,
    exports: components
})
export class SearchPageModule {
}
