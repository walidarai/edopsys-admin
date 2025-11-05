import { Component } from '@angular/core';
import { AnniversaryAndBirthday } from './interfaces/anniversary.interface';
import { AnniversaryBirthdayTypeEnum } from './enums/anniversary.enum';

@Component({
    selector: 'app-anniversaries-dashboard',
    templateUrl: './anniversaries-dashboard.component.html',
    styleUrl: './anniversaries-dashboard.component.scss',
    standalone: false,
})
export class AnniversariesDashboardComponent {
    anniversaries_birthdays: AnniversaryAndBirthday[] = [
        {
            initials: 'WA',
            name: 'Walid Arai',
            years: 1,
            date: '01 January',
            color: 'bg-blue-500',
            type: AnniversaryBirthdayTypeEnum.Anniversary,
        },
        {
            initials: 'AK',
            name: 'Arshad Kaldane',
            date: '14 May',
            color: 'bg-green-500',
            type: AnniversaryBirthdayTypeEnum.Birthday,
        },
        {
            initials: 'SM',
            name: 'Simran Mahadik',
            years: 1,
            date: '01 October',
            color: 'bg-black',
            type: AnniversaryBirthdayTypeEnum.Anniversary,
        },
        {
            initials: 'OK',
            name: 'Onkar Jadhav',
            date: '29 February',
            color: 'bg-orange-500',
            type: AnniversaryBirthdayTypeEnum.Birthday,
        },
        {
            initials: 'AS',
            name: 'Akram Shaikh',
            years: 10,
            date: '04 December',
            color: 'bg-red-500',
            type: AnniversaryBirthdayTypeEnum.Anniversary,
        },
        {
            initials: 'TB',
            name: 'Trupti Barde',
            date: '07 February',
            color: 'bg-gray-500',
            type: AnniversaryBirthdayTypeEnum.Birthday,
        },
    ];
    anniversaryBirthdayTypeEnum = AnniversaryBirthdayTypeEnum;
}
