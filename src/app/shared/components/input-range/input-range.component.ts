import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Size} from "../../../core/models/filtering/size";

@Component({
    selector: 'app-input-range',
    templateUrl: './input-range.component.html',
    styleUrls: ['./input-range.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRangeComponent {
    @Input() public control = new FormControl([20, 40]);

    @Input() public maxValue = 100;
    @Input() public minValue = 0;
    @Input() public steps = 5;

    @Input() public ticksLabels: [] = [];
    @Input() public placeholder = 'Введите значение';
    @Input() public size: Size = 's';

    @Input() public pluralize = {
        other: '%',
    };
}
