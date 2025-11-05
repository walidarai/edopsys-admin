import { Component, Input } from '@angular/core';
import { SubTab } from './interfaces/sub-tabs.interface';

@Component({
    selector: 'app-sub-tabs',
    templateUrl: './sub-tabs.component.html',
    styleUrl: './sub-tabs.component.scss',
    standalone: false,
})
export class SubTabsComponent {
    @Input() tabs: SubTab[] = [];
}
