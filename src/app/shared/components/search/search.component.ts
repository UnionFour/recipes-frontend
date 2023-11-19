import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { DestroyableComponent } from '../destroyable-component/destroyable.component';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent extends DestroyableComponent implements OnInit {
    public form: FormGroup;

    constructor(private fb: FormBuilder) {
        super();
        this.form = this.createForm();
    }

    ngOnInit() {
        this.form.valueChanges.pipe(
            takeUntil(this.destroy$)
        ).subscribe(() => {
            console.log('делаем запрос по поиску рецепта');
        });
    }

    createForm(): FormGroup {
        return this.fb.group({
            recipeName: new FormControl('')
        });
    }
}
