import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-characteristic',
    templateUrl: './characteristic.component.html',
    styleUrls: ['./characteristic.component.scss']
})
export class CharacteristicComponent {
    @Input() public value!: number;
    @Input() public name!: string;
}
