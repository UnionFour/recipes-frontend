import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedSortMethod } from '../../../../core/models/sorting/selectedSortMethod.model';
import { SortMethod } from '../../../../core/models/sorting/sortMethod.model';
import { Order } from '../../../../core/models/sorting/order.model';

@Component({
    selector: 'app-sort',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortComponent implements OnInit {
    @Input() public selectedSortMethod!: SelectedSortMethod;

    @Input() public sortMethods!: SortMethod[];
    // @Input() public defaultSortMethod!: SelectedSortMethod;
    @Input() public defaultOrder: Order = 'ascending';

    @Output() public changedSortMethod = new EventEmitter<SelectedSortMethod>();

    public ngOnInit(): void {
        console.log('sort', )

    }

    public isSelectedSortMethod(sortMethod: SortMethod) {
        return this.selectedSortMethod.value === sortMethod.value;
    }

    public isAscendingSorting(sortMethod: SortMethod): boolean {
        return sortMethod.isOrdinal && this.isSelectedSortMethod(sortMethod)
            && this.selectedSortMethod.order === 'ascending';
    }

    public isDescendingSorting(sortMethod: SortMethod): boolean {
        return sortMethod.isOrdinal && this.isSelectedSortMethod(sortMethod)
            && this.selectedSortMethod.order === 'descending';
    }

    public changSortMethod(sortMethod: SortMethod): void {
        if (!this.isSelectedSortMethod(sortMethod) || sortMethod.isOrdinal) {
            const newSortOrder: Order = !sortMethod.isOrdinal ? 'indefinite'
                : this.isAscendingSorting(sortMethod) ? 'descending' : 'ascending';
            this.selectedSortMethod = {
                value: sortMethod.value,
                order: newSortOrder,
            };

            this.changedSortMethod.next(this.selectedSortMethod);
        }
    }
}
