import { Component, Input, OnInit } from '@angular/core';
import { async, delay, filter, Observable, of, startWith, Subject, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk';
import { SelectOption } from '../../../core/models/recipe/selectOption.model';

type Size = 's' | 'l' | 'm';

@Component({
    selector: 'app-async-select',
    templateUrl: './async-select.component.html',
    styleUrls: ['./async-select.component.scss']
})
export class AsyncSelectComponent implements OnInit {
    @Input() public placeholder: string = 'Введите значение';
    @Input() public control: FormControl = new FormControl<string[]>([]);
    @Input() public size: Size = 's';
    @Input() public databaseMockData: SelectOption[] = [];
    @Input() public showList: boolean = false;

    public search$ = new Subject<string | null>();
    public items$!: Observable<SelectOption[] | null>;

    public values: SelectOption[] | null = [];

    ngOnInit() {
        this.items$ = this.search$.pipe(
            filter((value: any) => value !== null),
            switchMap(search =>
                this.serverRequest(search).pipe(startWith<SelectOption[] | null>(null)),
            ),
            startWith(this.databaseMockData),
        );
    }

    public onSearchChange(searchQuery: string | null): void {
        this.search$.next(searchQuery);
    }

    public onValueChanges(value: any) {
        this.control.setValue(value);
    }

    public deleteItem(item: any) {
        this.values?.splice(this.values?.indexOf(item), 1);
    }

    /**
     * Server request emulation
     */
    private serverRequest(searchQuery: string | null): Observable<SelectOption[]> {
        const result = this.databaseMockData.filter(user =>
            TUI_DEFAULT_MATCHER(user, searchQuery || ''),
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
