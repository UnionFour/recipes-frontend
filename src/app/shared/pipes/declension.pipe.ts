import { Pipe, PipeTransform } from '@angular/core';

export interface DeclensionsWord {
    nominativeCase: string,
    pluralCase: string,
    genitiveCase: string
}

@Pipe({
    name: 'declension'
})
export class DeclensionPipe implements PipeTransform {
    public declensionNumber(value: number, word: DeclensionsWord): string {
        if (['11', '12', '13', '14'].includes(value.toString())) {
            return word.genitiveCase;
        } else if (value.toString().slice(value.toString().length - 1)==='1') {
            return word.nominativeCase;
        } else if ('234'.includes(value.toString().slice(value.toString().length - 1))) {
            return word.pluralCase;
        }

        return word.genitiveCase;
    }


    public transform(value: number, word: DeclensionsWord): string {
        if (value > 0) {
            return this.declensionNumber(value, word);
        }

        return '';
    }
}
