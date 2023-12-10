import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { SelectOption } from '../../../core/models/recipe/selectOption.model';
import { DestroyableComponent } from '../../../shared/components/destroyable-component/destroyable.component';
import { categories, Category } from '../../../core/mocks/categories.mock';

@Component({
    selector: 'app-filter-panel',
    templateUrl: './filter-panel.component.html',
    styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent extends DestroyableComponent implements OnInit, OnDestroy {
    public form: FormGroup = new FormGroup({});
    public isSearchLoose: boolean = true;

    @Output() public filterValuesChanges = new EventEmitter()

    // временные моки для имитации запроса
    public categoriesMockData: Category[] = categories;

    public ingredientsMockData: SelectOption[] = [
        new SelectOption(11, 'сливочное масло'),
        new SelectOption(12, 'морковь'),
        new SelectOption(13, 'капуста'),
        new SelectOption(14, 'помидоры'),
        new SelectOption(15, 'пшеничная мука'),
        new SelectOption(16, 'молоко'),
        new SelectOption(17, 'картофель'),
        new SelectOption(19, 'сахар'),
    ];

    constructor(
        private fb: FormBuilder
    ) {
        super();
    }

    ngOnInit() {
        this.form = this.createForm();

        // получаем значения в поля из формы по подписке
        this.form.get('isSearchLoose')!.valueChanges.pipe(
            takeUntil(this.destroy$)
        ).subscribe((value: boolean) => this.isSearchLoose = value);

        this.form.valueChanges.pipe(
            takeUntil(this.destroy$)
        ).subscribe(() => {
            // фильтруем список рецептов с дебаунсом
            // console.log(this.form.value);
            this.filterValuesChanges.next(this.form.value.ingredients
                .map((ingredient: {id: number, title: string}) => ingredient.title));
        });
    }

    public getControl(controlName: string): FormControl {
        return this.form.get(controlName) as FormControl;
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
}
