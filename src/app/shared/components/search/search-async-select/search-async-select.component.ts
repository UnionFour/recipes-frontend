import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {debounceTime, filter, Observable, startWith, Subject, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";
import {Size} from "../../../../core/models/filtering/size";
import {RecipeService} from "../../../../core/services/recipe.service";
import {DestroyableComponent} from "../../destroyable-component/destroyable.component";

@Component({
    selector: 'app-search-async-select',
    templateUrl: './search-async-select.component.html',
    styleUrls: ['./search-async-select.component.scss']
})
export class SearchAsyncSelectComponent extends DestroyableComponent implements OnInit, AfterViewInit{
    public items$!: Observable<string[] | null>;
    public readonly search$ = new Subject<string | null>();

    @Input() public control: FormControl = new FormControl();
    @Input() public placeholder = 'Введите значение';
    @Input() public size: Size = 's';

    constructor(
        public recipeService: RecipeService
    ) {
        super();
    }

    ngOnInit() {
        this.items$ = this.search$.pipe(
            debounceTime(300),
            filter(value => value !== null),
            switchMap(search =>
                this.recipeService.findIngredients(search).pipe(
                    startWith<string[] | null>(null)
                ))
        );
    }

    ngAfterViewInit() {
        this.search$.next('');
    }

    public onSearchChange(searchQuery: string | null) {
        this.search$.next(searchQuery);
    }
}
