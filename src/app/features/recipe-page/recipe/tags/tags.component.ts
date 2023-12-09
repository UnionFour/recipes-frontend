import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
    @Input() public isCheap = false;
    @Input() public isDairyFree = false;
    @Input() public isGlutenFree = false;
    @Input() public isVegan = false;
    @Input() public isVegetarian = false;
    @Input() public isVeryHealthy = false;
    @Input() public isVeryPopular = false;

    get tagsExist(): boolean {
        return this.isCheap || this.isDairyFree || this.isGlutenFree
            || this.isVegan || this.isVegetarian || this.isVeryHealthy || this.isVeryPopular
    }
}
