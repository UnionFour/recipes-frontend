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
        const lastNumber: string = value.toString()[value.toString().length - 1];
        if (['2', '3', '4'].includes(lastNumber)) {
            return word.genitiveCase;
        } else if (lastNumber === '1' && value.toString()[value.toString().length - 2] !== '1') {
            return word.nominativeCase;
        }

        return word.pluralCase;
    }


    public transform(value: number, word: DeclensionsWord): string {
        if (value > 0) {
            return this.declensionNumber(value, word);
        }

        return '';
    }
}
