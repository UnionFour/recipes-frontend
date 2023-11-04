import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    public form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.createForm();
    }

    ngOnInit() {
        this.form.valueChanges.subscribe(() => {
            console.log('делаем запрос по поиску рецепта');
        });
    }

    createForm(): FormGroup {
        return this.fb.group({
            recipeName: new FormControl('')
        });
    }
}
