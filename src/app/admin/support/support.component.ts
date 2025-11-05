import { Component } from '@angular/core';
import { SubTab } from '../../shared/components/sub-tabs/interfaces/sub-tabs.interface';

interface SupportTicket {
    id: string;
    subject: string;
    description: string;
    user: string;
    priority: 'Low' | 'Medium' | 'High';
    createdAt: Date;
    status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
}

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrl: './support.component.scss',
    standalone: false,
})
export class SupportComponent {
    tabs: SubTab[] = [
        {
            name: 'OPEN',
            route: './open',
        },
        {
            name: 'IN PROGRESS',
            route: './in-progress',
        },
        {
            name: 'RESOLVED',
            route: './resolved',
        },
        {
            name: 'CLOSED',
            route: './closed',
        },
    ];

    tickets: SupportTicket[] = [
        {
            id: 'TCK-1001',
            subject: 'Login issue',
            description: 'Unable to login with correct credentials.',
            user: 'john.doe@example.com',
            priority: 'High',
            createdAt: new Date(),
            status: 'Open',
        },
        {
            id: 'TCK-1002',
            subject: 'Feature request',
            description: 'Add dark mode support.',
            user: 'jane.smith@example.com',
            priority: 'Low',
            createdAt: new Date(),
            status: 'In Progress',
        },
    ];

    statusOptions = ['Open', 'In Progress', 'Resolved', 'Closed'];

    onStatusChange(event: Event, ticket: SupportTicket) {
        const target = event.target as HTMLSelectElement;
        const newStatus = target.value as SupportTicket['status'];
        this.updateStatus(ticket, newStatus);
    }

    updateStatus(
        ticket: SupportTicket,
        newStatus: 'Open' | 'In Progress' | 'Resolved' | 'Closed'
    ) {
        ticket.status = newStatus;
    }
}
