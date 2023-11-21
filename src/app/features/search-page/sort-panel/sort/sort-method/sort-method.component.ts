import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sort-method',
    templateUrl: './sort-method.component.html',
    styleUrls: ['./sort-method.component.scss'],
})
export class SortMethodComponent {
    @Input() public name!: string;
    @Input() public isOrdinal = false;
    @Input() public isSelect = false;
    @Input() public isAscendingSorting = false;
    @Input() public isDescendingSorting = false;
}
