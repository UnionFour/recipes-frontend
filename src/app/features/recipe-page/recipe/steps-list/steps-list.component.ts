import { Component, Input } from '@angular/core';
import { Step } from '../../../../../gql/graphql';

@Component({
    selector: 'app-steps-list',
    templateUrl: './steps-list.component.html',
    styleUrls: ['./steps-list.component.scss']
})
export class StepsListComponent {
    @Input() public steps!: Step[];
}
