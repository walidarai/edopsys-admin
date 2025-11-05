import { Component } from '@angular/core';
import { Notification } from '../interfaces/notification.interface';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.scss',
    standalone: false,
})
export class NotificationComponent {
    notifications: Notification[] = [
        {
            name: 'Bangalore Science Exhibition 2024',
            action: 'event has started',
            time: '3:20 am',
            iconColor: 'bg-blue-100',
            icon: 'fa-shopping-cart',
            iconTextColor: 'text-blue-900',
        },
        {
            name: 'Simran Mahadik',
            action: 'EdOpSys Achieves Excellence Award in Educational Operations',
            time: '3:20 am',
            iconColor: 'bg-blue-100',
            icon: 'fa-user',
            iconTextColor: 'text-green-800',
        },
        {
            name: 'Walid Arai',
            action: 'created an event Send-Off / Farewell Party',
            time: '3:20 am',
            iconColor: 'bg-blue-100',
            icon: 'fa-shopping-cart',
            iconTextColor: 'text-blue-900',
        },
        {
            name: 'Arshad Kaldane',
            action: 'has given you a feedback',
            time: '3:20 am',
            iconColor: 'bg-blue-100',
            icon: 'fa-shopping-cart',
            iconTextColor: 'text-blue-900',
        },
        {
            name: 'Onkar Jadhav',
            action: 'has purshed a book from library',
            time: '3:20 am',
            iconColor: 'bg-blue-100',
            icon: 'fa-shopping-cart',
            iconTextColor: 'text-blue-900',
        },
    ];
}
