import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiHorizontalDirection } from '@taiga-ui/core';

@Component({
    selector: '[sideIcon]',
    templateUrl: './side-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideIconComponent {
    public icon = '';

    @Input()
    set sideIcon(icon: string) {
        this.icon = `assets/img/icons/${icon}.svg`
    }

    @Input() iconAlign: TuiHorizontalDirection = 'left';
    @Input() indent = '0px'

    get hasIcon(): boolean {
        return !!this.icon;
    }
    
    get iconAlignLeft(): boolean {
        return this.hasIcon && this.iconAlign === 'left';
    }

    get iconAlignRight(): boolean {
        return this.hasIcon && this.iconAlign === 'right';
    }
}
