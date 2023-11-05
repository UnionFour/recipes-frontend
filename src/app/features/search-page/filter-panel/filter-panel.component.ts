import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

    public createForm(): FormGroup {
        return this.fb.group({
            isSearchLoose: true,
            containerMethods: [],
            nutritionalValues: [],
            categories: [],
            ingredients: []
        });
    }
}
