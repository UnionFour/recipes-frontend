import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { debounceTime, startWith, switchMap, takeUntil } from 'rxjs';

import { DestroyableComponent } from '../../../shared/components/destroyable-component/destroyable.component';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent extends DestroyableComponent implements OnInit {
    public search!: FormControl;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
    ) {
        super();
    }

    public ngOnInit() {
        this.search = new FormControl<string>(this.route.snapshot.queryParams['recipeName'] || '')

        this.search.valueChanges.pipe(
            startWith(this.search.value),
            debounceTime(300),
            switchMap((controlValue) => this.updateQueryParams(controlValue)),
            takeUntil(this.destroy$)
        ).subscribe();
    }

    private updateQueryParams(searchValue: string){

        const queryParams: Params = {
            recipeName: searchValue
        };

        return this.router.navigate([], {
            relativeTo: this.route,
            queryParams,
            queryParamsHandling: 'merge'
        }).then();
    }

}
