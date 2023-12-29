import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ISelectItem } from '../../../core/models/filtering/selectItem.model';
import { Size } from '../../../core/models/filtering/size';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
    @Input() public control: FormControl = new FormControl();
    @Input() public items: ISelectItem[] = [];
    @Input() public placeholder = 'Введите значение';
    @Input() public size: Size = 's';

}
