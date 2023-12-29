import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { delay, filter, Observable, of, startWith, Subject, switchMap } from 'rxjs';

import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk';

import { DestroyableComponent } from '../destroyable-component/destroyable.component';
import { ISelectItem } from '../../../core/models/filtering/selectItem.model';
import { Size } from '../../../core/models/filtering/size';

@Component({
    selector: 'app-async-select',
    templateUrl: './async-select.component.html',
    styleUrls: ['./async-select.component.scss'],

})
export class AsyncSelectComponent extends DestroyableComponent implements OnInit {
    public items$!: Observable<ISelectItem[] | null>;
    public readonly  search$ = new Subject<string | null>();

    @Input() public control: FormControl = new FormControl();
    @Input() public placeholder = 'Введите значение';
    @Input() public size: Size = 's';
    @Input() public databaseMockData: ISelectItem[] = [];

    ngOnInit() {
        this.items$ = this.search$.pipe(
            filter(value => value !== null),
            switchMap(search =>
                this.serverRequest(search).pipe(startWith<ISelectItem[] | null>(null)),
            ),
            startWith(this.databaseMockData),
        );
    }

    public onSearchChange(searchQuery: string | null) {
        this.search$.next(searchQuery);
    }

    /**
     * Server request emulation
     */
    private serverRequest(searchQuery: string | null): Observable<ISelectItem[]> {
        const result = this.databaseMockData.filter(user =>
            TUI_DEFAULT_MATCHER(user, searchQuery || ''),
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
