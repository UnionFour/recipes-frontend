import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SelectOption } from '../../../core/models/recipe/selectOption.model';

@Component({
    selector: 'app-filter-panel',
    templateUrl: './filter-panel.component.html',
    styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit, OnDestroy {
    public form: FormGroup = new FormGroup({});
    public isSearchLoose: boolean = true;
    public selectedIngredients: SelectOption[] = [
        new SelectOption(11, 'Сливочное масло'),
        new SelectOption(12, 'Морковь'),
        new SelectOption(13, 'Капуста'),
    ];

    // временные моки для имитации запроса
    public categoriesMockData: SelectOption[] = [
        new SelectOption(121, 'Вегатерианское'),
        new SelectOption(122, 'Веганское'),
        new SelectOption(123, 'Без глютена'),
        new SelectOption(124, 'Без молока'),
        new SelectOption(125, 'Здоровое меню'),
        new SelectOption(125, 'Дешевое'),
        new SelectOption(125, 'Популярное'),
    ];

    public ingredientsMockData: SelectOption[] = [
        new SelectOption(11, 'Сливочное масло'),
        new SelectOption(12, 'Морковь'),
        new SelectOption(13, 'Капуста'),
        new SelectOption(14, 'Помидоры'),
        new SelectOption(15, 'Пшеничная мука'),
        new SelectOption(16, 'Молоко'),
        new SelectOption(17, 'Картофель'),
        new SelectOption(19, 'Сахар'),
    ];

    private ngUnsubscribe = new Subject<void>();

    constructor(
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.form = this.createForm();
        this.form.get('isSearchLoose')!.valueChanges.pipe(
            takeUntil(this.ngUnsubscribe)
        ).subscribe((value: boolean) => this.isSearchLoose = value);

        this.form.valueChanges.pipe(
            takeUntil(this.ngUnsubscribe)
        ).subscribe(() => {
            // фильтруем список рецептов с дебаунсом
            console.log(this.form.value);
        });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    private createForm(): FormGroup {
        return this.fb.group({
            isSearchLoose: new FormControl(true),
            containerMethods: new FormControl([]),
            nutritionalValues: new FormControl([100, 600]),
            categories: new FormControl([]),
            ingredients: new FormControl([])
        });
    }

    public getControl(controlName: string): FormControl {
        return this.form.get(controlName) as FormControl;
    }
}
