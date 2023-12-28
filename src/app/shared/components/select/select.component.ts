import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ISelectItem } from '../../../core/models/filtering/selectItem.model';

type Size = 's' | 'm' | 'l';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {

    @Input() public placeholder = 'Введите значение';
    @Input() public control: FormControl = new FormControl();
    @Input() public size: Size = 's';
    @Input() public items: ISelectItem[] = [];

}
