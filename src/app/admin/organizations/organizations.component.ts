import { Component } from '@angular/core';
import { SubTab } from '../../shared/components/sub-tabs/interfaces/sub-tabs.interface';

@Component({
    selector: 'app-organizations',
    templateUrl: './organizations.component.html',
    styleUrl: './organizations.component.scss',
    standalone: false,
})
export class OrganizationsComponent {
    tabs: SubTab[] = [
        {
            name: 'Customer',
            route: './customer',
        },
        {
            name: 'Trial',
            route: './trial',
        },
        {
            name: 'Test',
            route: './test',
        },
    ];

    isDrawerVisible = false;

    toggleDrawer() {
        this.isDrawerVisible = !this.isDrawerVisible;
    }
}
