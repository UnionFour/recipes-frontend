import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { debounceTime, startWith, switchMap, takeUntil } from 'rxjs';

import { Category } from '../../../core/models/filtering/category';
import { FilteringParams } from '../../../core/models/filtering/filteringParams';
import { DestroyableComponent } from '../../../shared/components/destroyable-component/destroyable.component';

@Component({
    selector: 'app-filter-panel',
    templateUrl: './filter-panel.component.html',
    styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent extends DestroyableComponent implements OnInit, OnDestroy {
    public filteringParamsForm!: FormGroup;

    public readonly nutritionalInputMinValue = 0;
    public readonly nutritionalInputMaxValue = 2000;
    public readonly nutritionalInputSteps = 20;

    private readonly isSearchLooseDefaultValue = true;
    private readonly nutritionalDefaultValue
        = [this.nutritionalInputMinValue, this.nutritionalInputMaxValue];

    public readonly categories: Category[] = [
        new Category('Вегатерианское', 'vegetarian'),
        new Category('Веганское', 'vegan'),
        new Category('Без глютена', 'glutenFree'),
        new Category('Без молока', 'dairyFree'),
        new Category('Здоровое меню', 'veryHealthy'),
        new Category('Дешевое', 'cheap'),
        new Category('Популярное', 'veryPopular'),
    ];

    public readonly ingredientsMockData: string[] = [
        'сливочное масло',
        'морковь',
        'капуста',
        'помидоры',
        'пшеничная мука',
        'молоко',
        'картофель',
        'сахар',
    ];

    @Output() public filterValuesChanges = new EventEmitter();

    constructor(
        public router: Router,
        public route: ActivatedRoute,
    ) {
        super();
    }

    ngOnInit() {
        this.filteringParamsForm = new FormGroup(
            {
                isSearchLoose: new FormControl(this.isSearchLooseInitialValue),
                nutritionalValues: new FormControl(this.nutritionalInitialValue),
                categories: new FormControl(this.categoriesInitialValue),
                ingredients: new FormControl( this.ingredientsInitialValue)
            }
        );

        this.filteringParamsForm.valueChanges.
            pipe(
                startWith(this.filteringParamsForm.value),
                debounceTime(1000),
                switchMap((formValue: FilteringParams) => this.updateQueryParams(formValue)),
                takeUntil(this.destroy$)
            ).subscribe();
    }

    private updateQueryParams(filteringParams: FilteringParams){
        const queryParams: Params = {
            isSearchLoose: filteringParams.isSearchLoose,
            nutritionalValues: filteringParams.nutritionalValues,
            categories: filteringParams.categories.map((r) => JSON.stringify(r)),
            ingredients: filteringParams.ingredients
        };

        console.log('form.valueChanges', filteringParams);
        console.log('this.form', this.filteringParamsForm.value);

        return this.router.navigate([], {
            relativeTo: this.route,
            queryParams,
            queryParamsHandling: 'merge'
        });
    }

    private get isSearchLooseInitialValue() {
        const isSearchLooseQueryValue = this.route.snapshot.queryParams['isSearchLoose'];
        return isSearchLooseQueryValue ? isSearchLooseQueryValue === 'true'
            : this.isSearchLooseDefaultValue;
    }

    private get nutritionalInitialValue(): number[] {
        const nutritionalQueryValue = this.route.snapshot.queryParams['nutritionalValues'];
        return nutritionalQueryValue
            ? nutritionalQueryValue.map((nutritionalValue: string) => +nutritionalValue)
            : this.nutritionalDefaultValue;
    }

    private get categoriesInitialValue(): Category[] {
        const categoriesQueryValue = this.route.snapshot.queryParams['categories'];

        if (!categoriesQueryValue) {
            return [];
        }

        if (typeof categoriesQueryValue === 'string') {
            const parsedCategories = JSON.parse(categoriesQueryValue);
            return [new Category(parsedCategories.title, parsedCategories.value)];
        } else {
            return categoriesQueryValue.map((category: string) => {
                const parsedCategory = JSON.parse(category);
                return new Category(parsedCategory.title, parsedCategory.value);
            });
        }
    }

    private get ingredientsInitialValue(): string[] {
        const ingredientsQueryValue = this.route.snapshot.queryParams['ingredients'];

        if (!ingredientsQueryValue) {
            return [];
        }

        return typeof ingredientsQueryValue === 'string' ? [ingredientsQueryValue]
            : ingredientsQueryValue;
    }

    public getControl(controlName: string): FormControl {
        return this.filteringParamsForm.get(controlName) as FormControl;
    }
}
