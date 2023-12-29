import { Pipe, PipeTransform } from '@angular/core';
import { ISelectItem } from '../../core/models/filtering/selectItem.model';

@Pipe({
    name: 'hideSelected'
})
export class HideSelectedPipe implements PipeTransform {
    transform(items: ISelectItem[] | null, selectedItems: ISelectItem[]): ISelectItem[] | null {
        if (items === null || selectedItems.length === 0) {
            return items;
        }

        return items.filter((item) =>
            !selectedItems.some((selectedItem) =>
                selectedItem.toString() === item.toString()));
    }

}
