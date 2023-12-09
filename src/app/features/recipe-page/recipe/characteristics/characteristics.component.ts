import { Component, Input } from '@angular/core';
import { DeclensionsWord } from '../../../../shared/pipes/declension.pipe';

@Component({
    selector: 'app-characteristics',
    templateUrl: './characteristics.component.html',
    styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent {
    public minutesDeclensions: DeclensionsWord = {
        nominativeCase: 'минута',
        pluralCase: 'минут',
        genitiveCase: 'минуты'
    };

    @Input() public cookingTime!: number;
    @Input() public calories!: number;

}
