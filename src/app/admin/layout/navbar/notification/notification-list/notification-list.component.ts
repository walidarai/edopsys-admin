import { Component } from '@angular/core';
import { NotificationList } from '../../interfaces/notification-list.interface';

@Component({
    selector: 'app-notification-list',
    templateUrl: './notification-list.component.html',
    styleUrl: './notification-list.component.scss',
    standalone: false,
})
export class NotificationListComponent {
    notifications: NotificationList[] = [
        {
            id: 1,
            name: 'Walid Arai',
            date: '20 May 2018',
            message:
                'The Bangalore Science Exhibition 2024 has officially begun, showcasing cutting-edge innovations and scientific breakthroughs. Join us in celebrating science, technology, and creativity at this exciting event!',
            time: '11:49 am',
            read: false,
        },
        {
            id: 2,
            name: 'Simran Mahadik',
            date: '20 May 2018',
            message:
                "EdOpSys has been honored with the Excellence Award in Educational Operations, recognizing its outstanding contribution to streamlining and enhancing educational management. This achievement highlights the platform's innovative solutions and impact in the education sector.",
            time: '11:49 am',
            read: false,
        },
        {
            id: 3,
            name: 'Walid Arai',
            date: '20 May 2018',
            message:
                "An event titled 'Send-Off / Farewell Party' has been created to bid a heartfelt goodbye to our departing members. Join us as we celebrate cherished memories and wish them success in their future endeavors!",
            time: '11:49 am',
            read: false,
        },
        {
            id: 4,
            name: 'Arshad Kaldane',
            date: '20 May 2018',
            message:
                'We have received feedback from you, and we appreciate your input! Thank you for sharing your thoughts, which help us improve and serve you better.',
            time: '11:49 am',
            read: false,
        },
        {
            id: 5,
            name: 'Onkar Jadhav',
            date: '20 May 2018',
            message:
                ' has successfully checked out a book from the library. Please return it by the due date to ensure availability for other students.',
            time: '11:49 am',
            read: false,
        },
    ];

    constructor() {}

    markAsRead(notification: NotificationList) {
        notification.read = true;
    }

    markAllAsRead() {
        this.notifications.forEach((notification) => {
            notification.read = true;
        });
    }
}
