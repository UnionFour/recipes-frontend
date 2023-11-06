import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-filter-panel',
    templateUrl: './filter-panel.component.html',
    styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit, OnDestroy {
    public form: FormGroup = new FormGroup({});
    public isSearchLoose: boolean = true;

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
