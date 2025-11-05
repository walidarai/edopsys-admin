import { Component } from '@angular/core';
import { Event } from './interfaces/event.interface';

@Component({
    selector: 'app-event-dashboard',
    templateUrl: './event-dashboard.component.html',
    styleUrl: './event-dashboard.component.scss',
    standalone: false,
})
export class EventDashboardComponent {
    events: Event[] = [
        {
            id: 1,
            title: 'Bangalore Science Exhibition 2024',
            startDate: '01 Dec 2024 at 08:12 AM',
            location: 'India',
            peopleGoing: 2,
            description:
                'Join us for the Bangalore Science Exhibition 2024, where innovation and creativity come to life! Experience groundbreaking projects and interactive displays that showcase the brilliance of young scientists from across the region.',
            image: 'assets/images/logos/CapHighResT.png',
            comments: 0,
            attending: false,
        },
        {
            id: 2,
            title: 'Send-Off / Farewell Party',
            startDate: '25 Dec 2024 at 08:00 AM',
            location: 'India',
            peopleGoing: 2,
            description:
                'As we gather for this Farewell Party, we say goodbye to our amazing seniors who are about to embark on exciting new journeys.',
            image: 'assets/images/logos/CapHighResT.png',
            comments: 0,
            attending: false,
        },
    ];

    toggleAttendance(eventId: number): void {
        const event = this.events.find((event) => event.id === eventId);
        if (event) {
            event.peopleGoing += event.attending ? -1 : 1;
            event.attending = !event.attending;
        }
    }
}
