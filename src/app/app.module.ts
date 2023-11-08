import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { SearchPageModule } from './features/search-page/search-page.module';
import { RecipePageComponent } from './features/recipe-page/recipe-page.component';
import { RecommendationsPanelComponent } from './features/recipe-page/recommendations-panel/recommendations-panel.component';
import { RecipePageModule } from './features/recipe-page/recipe-page.module';

@NgModule({
    declarations: [
        AppComponent,
        RecipePageComponent,
        RecommendationsPanelComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        AppRoutingModule,
        SearchPageModule,
        RecipePageModule
    ],
    providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
