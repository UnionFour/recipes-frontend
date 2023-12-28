import { Component, Input, OnInit } from '@angular/core';
import { delay, filter, Observable, of, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk';
import { SelectOption } from '../../../core/models/recipe/selectOption.model';
import { DestroyableComponent } from '../destroyable-component/destroyable.component';
import {ISelectItem} from "../../../core/models/filtering/selectItem.model";

type Size = 's' | 'l' | 'm';

@Component({
    selector: 'app-async-select',
    templateUrl: './async-select.component.html',
    styleUrls: ['./async-select.component.scss']
})
export class AsyncSelectComponent extends DestroyableComponent implements OnInit {
    public search$ = new Subject<string | null>();
    public items$!: Observable<ISelectItem[]>;

    @Input() public placeholder = 'Введите значение';
    @Input() public control: FormControl = new FormControl();
    @Input() public size: Size = 's';
    @Input() public databaseMockData: ISelectItem[] = [];

    ngOnInit() {
        this.items$ = this.search$.pipe(
            filter(value => value !== null),
            switchMap(search =>
                this.serverRequest(search).pipe(startWith<ISelectItem[]>([])),
            ),
            startWith(this.databaseMockData),
        );
    }

    public onSearchChange(searchQuery: string | null): void {
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
