import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { INutrient } from '../../../../core/models/recipe/nutrient.model';
import { CaloricBreakdown } from '../../../../../gql/graphql';

@Component({
    selector: 'app-nutrients',
    templateUrl: './nutrients.component.html',
    styleUrls: ['./nutrients.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NutrientsComponent {
    @Input() public calories!: number;
    @Input() public nutrients!: CaloricBreakdown;

    protected readonly Math = Math;
}
