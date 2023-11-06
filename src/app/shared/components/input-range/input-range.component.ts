import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

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
    @Input() public placeholder: string = 'Введите значение';
    @Input() public steps: number = 5;
    @Input() public segments: number = 5;
    @Input() public ticksLabels: number[] = [20, 40, 60, 80];

    // See https://angular.io/api/common/I18nPluralPipe
    @Input() public pluralize = {
        other: '%',
    };
}
