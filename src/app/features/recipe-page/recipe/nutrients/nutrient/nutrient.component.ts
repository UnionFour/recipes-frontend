import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-nutrient',
    templateUrl: './nutrient.component.html',
    styleUrls: ['./nutrient.component.scss']
})
export class NutrientComponent {
    @Input() public name!: string;
    @Input() public amount!: number;
    @Input() public unit!: string;

    protected readonly Math = Math;
}
