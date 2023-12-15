import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedSortMethod } from '../../../../core/models/sorting/selectedSortMethod.model';
import { SortMethod } from '../../../../core/models/sorting/sortMethod.model';
import { Order } from '../../../../core/models/sorting/order.model';
import { RecipeSortInput, SortEnumType } from '../../../../../gql/graphql';
import {RecipeParametersService} from "../../../../core/services/recipe-parameters.service";

@Component({
    selector: 'app-sort',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortComponent implements OnInit{
    private selectedSortMethod!: SelectedSortMethod;

    @Input() public sortMethods!: SortMethod[];
    @Input() public defaultSortMethod!: SortMethod;
    @Input() public defaultOrder: Order = 'ascending';

    @Output() public changedSortMethod = new EventEmitter<RecipeSortInput>();

    public ngOnInit(): void {
        const order: Order = this.defaultSortMethod.isOrdinal && this.defaultOrder
            !== 'indefinite' ? this.defaultOrder : 'indefinite';

        this.selectedSortMethod = {
            sortMethod: this.defaultSortMethod,
            order: order
        };

        this.changedSortMethod.next(this.preparedSelectedSortMethod);
    }

    public isSelectedSortMethod(sortMethod: SortMethod) {
        return this.selectedSortMethod.sortMethod === sortMethod;
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
                sortMethod: sortMethod,
                order: newSortOrder,
            };

            this.changedSortMethod.next(this.preparedSelectedSortMethod);
        }
    }

    private get preparedSelectedSortMethod(): RecipeSortInput {
        return {
            [this.selectedSortMethod.sortMethod.value]: this.selectedSortMethod.order === 'indefinite'
            || this.selectedSortMethod.order === 'descending' ? SortEnumType.Desc : SortEnumType.Asc
        };
    }
}
