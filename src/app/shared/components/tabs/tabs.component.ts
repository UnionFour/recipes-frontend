import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
    activeTabIndex = 0;

    @Input() tabs: string[] = [];

    @Output() changeActiveTab = new EventEmitter<number>();
    setActiveTab(tabIndex: number) {
        this.changeActiveTab.next(tabIndex);
    }
}
