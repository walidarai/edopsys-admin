import { Component } from '@angular/core';
import { SubTab } from '../../../shared/components/sub-tabs/interfaces/sub-tabs.interface';

@Component({
    selector: 'app-organization-details',
    templateUrl: './organization-details.component.html',
    styleUrl: './organization-details.component.scss',
    standalone: false,
})
export class OrganizationDetailsComponent {
    tabs: SubTab[] = [
        {
            name: 'Organization',
            route: './org-details',
        },
        {
            name: 'Features',
            route: './features',
        },
        {
            name: 'Application Settings',
            route: './application-settings',
        },
    ];
}
