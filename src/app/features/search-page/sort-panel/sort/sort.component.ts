import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISelectedSortMethod } from '../../../../core/models/sorting/selectedSortMethod.model';
import { ISortMethod } from '../../../../core/models/sorting/sortMethod.model';
import { Order } from '../../../../core/models/sorting/order.model';

@Component({
    selector: 'app-sort',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortComponent implements OnInit{
    selectedSortMethod!: ISelectedSortMethod;

    @Input() public sortMethods!: ISortMethod[];
    @Input() public defaultSortMethod!: ISortMethod;
    @Input() public defaultOrder: Order = 'ascending';
    @Output() public changedSortMethod: EventEmitter<ISelectedSortMethod>
        = new EventEmitter<ISelectedSortMethod>();

    public ngOnInit(): void {
        const order: Order = this.defaultSortMethod.isOrdinal && this.defaultOrder
            !== 'indefinite' ? this.defaultOrder : 'indefinite';
        this.selectedSortMethod = {
            sortMethod: this.defaultSortMethod,
            order: order
        };
    }

    public isSelectedSortMethod(sortMethod: ISortMethod) {
        return this.selectedSortMethod.sortMethod === sortMethod;
    }

    public isAscendingSorting(sortMethod: ISortMethod): boolean {
        return sortMethod.isOrdinal && this.isSelectedSortMethod(sortMethod)
            && this.selectedSortMethod.order === 'ascending';
    }

    public isDescendingSorting(sortMethod: ISortMethod): boolean {
        return sortMethod.isOrdinal && this.isSelectedSortMethod(sortMethod)
            && this.selectedSortMethod.order === 'descending';
    }

    public changSortMethod(sortMethod: ISortMethod): void {
        if (!this.isSelectedSortMethod(sortMethod) || sortMethod.isOrdinal) {
            const newSortOrder: Order = !sortMethod.isOrdinal ? 'indefinite'
                : this.isAscendingSorting(sortMethod) ? 'descending' : 'ascending';
            this.selectedSortMethod = {
                sortMethod: sortMethod,
                order: newSortOrder,
            };
            this.changedSortMethod.next(this.selectedSortMethod);
        }
    }
}
