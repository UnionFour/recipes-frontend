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
export class FilterPanelComponent extends DestroyableComponent implements OnInit {
    public filteringParamsForm!: FormGroup;

    public readonly nutritionalInputMinValue = 0;
    public readonly nutritionalInputMaxValue = 1300;
    public readonly nutritionalInputSteps = 13;

    private readonly isSearchLooseDefaultValue = true;
    private readonly nutritionalDefaultValue
        = [this.nutritionalInputMinValue, this.nutritionalInputMaxValue];

    public readonly categories: Category[] = [
        new Category('Вегатерианское', 'vegetarian'),
        new Category('Веганское', 'vegan'),
        new Category('Без глютена', 'glutenFree'),
        new Category('Без молока', 'dairyFree'),
        new Category('Здоровое', 'veryHealthy'),
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

    constructor(
        public router: Router,
        public route: ActivatedRoute,
    ) {
        super();
    }

    public ngOnInit() {
        this.filteringParamsForm = new FormGroup(
            {
                isSearchLoose: new FormControl(this.isSearchLooseInitialValue),
                nutritionalValues: new FormControl(this.nutritionalInitialValue),
                categories: new FormControl(this.categoriesInitialValue),
                ingredients: new FormControl( this.ingredientsInitialValue)
            }
        );

        this.filteringParamsForm.valueChanges.pipe(
            startWith(this.filteringParamsForm.value),
            debounceTime(600),
            switchMap((formValue: FilteringParams) => this.updateQueryParams(formValue)),
            takeUntil(this.destroy$)
        ).subscribe();

    }

    private updateQueryParams(filteringParams: FilteringParams){
        const queryParams: Params = {
            isSearchLoose: filteringParams.isSearchLoose,
            nutritionalValues: filteringParams.nutritionalValues,
            categories: filteringParams.categories.map((category) => JSON.stringify(category)),
            ingredients: filteringParams.ingredients
        };

        return this.router.navigate([], {
            relativeTo: this.route,
            queryParams,
            queryParamsHandling: 'merge'
        }).then();
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

    public resetForm() {
        this.setDefaultFilteringValues();
    }

    private setDefaultFilteringValues() {
        this.getControl('isSearchLoose').setValue(this.isSearchLooseDefaultValue);
        this.getControl('nutritionalValues').setValue(this.nutritionalDefaultValue);
        this.getControl('categories').setValue([]);
        this.getControl('ingredients').setValue([]);
    }
}
