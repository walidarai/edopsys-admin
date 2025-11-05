import { Component } from '@angular/core';
import { Mail } from '../interfaces/mail.interface.js';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrl: './email.component.scss',
    standalone: false,
})
export class EmailComponent {
    mails: Mail[] = [
        {
            id: 1,
            name: 'Simran Mahadik',
            action: 'requested for Parent Meeting at College Tomorrow',
            time: '3:20 am',
            iconColor: 'bg-blue-500',
            icon: 'fa-user',
            iconTextColor: 'text-white',
        },
        {
            id: 2,

            name: 'Walid Arai',
            action: 'Important Update: Revised College Rules and Regulations',
            time: '3:20 am',
            iconColor: 'bg-blue-500',
            icon: 'fa-user',
            iconTextColor: 'text-white',
        },
        {
            id: 3,

            name: 'Mubarak Dalvi',
            action: 'Student Absence Exceeding Two Days',
            time: '3:20 am',
            iconColor: 'bg-blue-500',
            icon: 'fa-user',
            iconTextColor: 'text-white',
        },
        {
            id: 4,

            name: 'Rupdali Sahare',
            action: 'Announcement: Student Exam Results Released',
            time: '3:20 am',
            iconColor: 'bg-blue-500',
            icon: 'fa-user',
            iconTextColor: 'text-white',
        },
        {
            id: 5,

            name: 'Simran Mahadik',
            action: 'Concerning Behavior Regarding Rupali',
            time: '3:20 am',
            iconColor: 'bg-blue-500',
            icon: 'fa-user',
            iconTextColor: 'text-white',
        },
    ];
}
