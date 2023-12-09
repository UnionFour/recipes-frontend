import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Recipe} from '../../../../gql/graphql';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeComponent {
    @Input() recipe!: Recipe | null;
}
