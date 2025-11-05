import { Component } from '@angular/core';
import { SubTab } from '../../../shared/components/sub-tabs/interfaces/sub-tabs.interface';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
    selector: 'app-organization-page',
    templateUrl: './organization-page.component.html',
    styleUrl: './organization-page.component.scss',
    standalone: false,
})
export class OrganizationPageComponent {
    subTabs: SubTab[] = [
        {
            name: 'Active',
            route: './active',
        },
        {
            name: 'Invited',
            route: './invited',
        },
        {
            name: 'Suspended',
            route: './suspended',
        },
        {
            name: 'Cancelled',
            route: './cancelled',
        },
    ];

    organizations = [
        {
            id: 1,
            name: 'NHSC Dapoli',
            empNumber: '0-100',
            domain: 'nhsc',
            product: null,
            registrationType: 'CUSTOMER',
            status: 'ACTIVE',
            source: null,
            contractDuration: null,
            contractAmount: null,
            paymentPerEmployeePerMonth: null,
            serviceStartedAt: '2025-06-07T17:10:16.057Z',
            links: [],
        },
        {
            id: 2,
            name: 'MESWC Dapoli',
            empNumber: '0-100',
            domain: 'meswc',
            product: null,
            registrationType: 'CUSTOMER',
            status: 'ACTIVE',
            source: null,
            contractDuration: null,
            contractAmount: null,
            paymentPerEmployeePerMonth: null,
            serviceStartedAt: '2025-07-17T10:22:16.057Z',
            links: [],
        },
        {
            id: 3,
            name: 'Zoya Cosmetics',
            empNumber: '0-100',
            domain: 'zoyaglow',
            product: null,
            registrationType: 'CUSTOMER',
            status: 'ACTIVE',
            source: null,
            contractDuration: null,
            contractAmount: null,
            paymentPerEmployeePerMonth: null,
            serviceStartedAt: '2024-08-22T00:12:16.057Z',
            links: [],
        },
        {
            id: 4,
            name: 'Swad Marathi',
            empNumber: '0-100',
            domain: 'swad-marathi',
            product: null,
            registrationType: 'CUSTOMER',
            status: 'ACTIVE',
            source: null,
            contractDuration: null,
            contractAmount: null,
            paymentPerEmployeePerMonth: null,
            serviceStartedAt: '2025-02-07T10:22:16.057Z',
            links: [],
        },
    ];

    sizeRange = ['0-100', '101-200', '201-500', '501-1000', '1000+'];
    orgType = ['School', 'College', 'Institution', 'Academy'];
    contractDuration = ['1 year', '2 year', '3 year', '4 year', '5 year'];
    startDate = [
        'Last Week',
        'Last Month',
        'Last 3 Months',
        'Last 6 Months',
        'Last Year',
    ];
    product = ['Pro', 'Standard'];

    type: string | null = null;
    subType: string | null = null;
    private sub!: Subscription;

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        // First Load/Reload
        this.updateRouteParams();

        // Navigation Events
        this.sub = this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                this.updateRouteParams();
            });
    }

    private updateRouteParams() {
        let active = this.route;
        while (active.firstChild) {
            active = active.firstChild;
        }
        this.type =
            active.snapshot.params['type'] ||
            active.parent?.snapshot.params['type'] ||
            null;
        this.subType = active.snapshot.params['subType'] || null;
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }

    viewDetails(orgId: number) {
        this.router.navigate([`/organizations/details/`, orgId]);
    }
}
