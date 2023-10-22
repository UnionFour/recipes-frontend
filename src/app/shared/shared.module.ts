import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const modules = [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
];

@NgModule({
    imports: modules
})
export class SharedModule {
}
