import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { INutrient } from '../../../../core/models/recipe/nutrient.model';

@Component({
    selector: 'app-nutrients',
    templateUrl: './nutrients.component.html',
    styleUrls: ['./nutrients.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NutrientsComponent {
  @Input() nutrients!: INutrient[]

}
