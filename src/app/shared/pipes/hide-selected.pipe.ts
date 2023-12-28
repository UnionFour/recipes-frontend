import { Pipe, PipeTransform } from '@angular/core';
import {ISelectItem} from "../../core/models/filtering/selectItem.model";

@Pipe({
    name: 'hideSelected'
})
export class HideSelectedPipe implements PipeTransform {

    transform(value: ISelectItem[] | null, args: ISelectItem[]): ISelectItem[] {
        if (value === null) {
            return []
        }
        return value.filter((r) => !args.find((rr) => rr.toString() === r.toString() ));
    }

}
