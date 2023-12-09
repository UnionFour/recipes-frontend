import { Component, Input } from '@angular/core';
import { INutrient } from '../../../../../core/models/recipe/nutrient.model';

@Component({
    selector: 'app-nutrient',
    templateUrl: './nutrient.component.html',
    styleUrls: ['./nutrient.component.scss']
})
export class NutrientComponent {
  @Input() public nutrient!: INutrient;
}
