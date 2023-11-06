import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

type Size = 's' | 'l' | 'm';

@Component({
    selector: 'app-input-range',
    templateUrl: './input-range.component.html',
    styleUrls: ['./input-range.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRangeComponent {
    @Input() public control = new FormControl([20, 40]);

    @Input() public maxValue: number = 100;
    @Input() public minValue: number = 0;
    @Input() public steps: number = 5;

    @Input() public ticksLabels: [] = [];
    @Input() public placeholder: string = 'Введите значение';
    @Input() public size: Size = 's';

    @Input() public pluralize = {
        other: '%',
    };
}
