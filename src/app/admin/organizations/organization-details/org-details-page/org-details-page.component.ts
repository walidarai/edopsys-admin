import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-org-details-page',
    templateUrl: './org-details-page.component.html',
    styleUrl: './org-details-page.component.scss',
    standalone: false,
})
export class OrgDetailsPageComponent {
    orgDetails = {
        id: 1,
        name: 'NHSC Dapoli',
        domain: 'nhsc',
        activeAccounts: 41,
        totalAccounts: 54,
        activeEmployees: 94,
        totalEmployees: 125,
        orgHead: {
            name: 'Ayyub Mulla',
            email: 'ayyub.mulla@nhscdapoli.com',
            phone: '+91 88776 55443',
            photo: '',
        },
        status: 'ACTIVE',
        contract: {
            product: null,
            registrationType: 'CUSTOMER',
            source: null,
            contractDuration: null,
            contractAmount: null,
            paymentPerEmployeePerMonth: null,
            serviceStartedAt: '2025-06-07T17:10:16.057Z',
            empNumber: '0-100',
        },
    };

    accounts = [
        {
            id: 1,
            name: 'Ayyub Mulla',
            email: 'ayyub.mulla@nhscdapoli.com',
            phone: '+91 88776 55443',
            photo: '',
            isAdmin: true,
        },
        {
            id: 2,
            name: 'Alam Ahmed',
            email: 'alam.ahmed@nhscdapoli.com',
            phone: '+91 88776 55443',
            photo: '',
            isAdmin: false,
        },
        {
            id: 3,
            name: 'Fairoza Sawant',
            email: 'fairoza.sawant@nhscdapoli.com',
            phone: '+91 88776 55443',
            photo: '',
            isAdmin: false,
        },
        {
            id: 4,
            name: 'Riyaz Maishale',
            email: 'riyaz.maishale@nhscdapoli.com',
            phone: '+91 88776 55443',
            photo: '',
            isAdmin: false,
        },
        {
            id: 5,
            name: 'Ashfaq Khadas',
            email: 'ashfaq.khadas@nhscdapoli.com',
            phone: '+91 88776 55443',
            photo: '',
            isAdmin: false,
        },
    ];

    keepOrder = (a: KeyValue<string, any>, b: KeyValue<string, any>): number =>
        0;

    prettifyCamelCase(text: string) {
        return text
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase())
            .trim();
    }
}
