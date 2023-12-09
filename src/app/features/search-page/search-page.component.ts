import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../core/services/recipe.service";

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit{

    constructor(public ser: RecipeService) {
    }
    ngOnInit(): void {
        this.ser.find(['яйцо']).subscribe((f) => console.log(f))
    }

}
