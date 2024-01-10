import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, Observable, startWith, Subject, switchMap } from 'rxjs';

import { DestroyableComponent } from '../../../../shared/components/destroyable-component/destroyable.component';
import { Size } from '../../../../core/models/filtering/size';
import { RecipeService } from '../../../../core/services/recipe.service';

@Component({
    selector: 'app-ingredients-async-select',
    templateUrl: './ingredients-async-select.component.html',
    styleUrls: ['./ingredients-async-select.component.scss'],

})
export class IngredientsAsyncSelectComponent extends DestroyableComponent implements OnInit, AfterViewInit {
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
