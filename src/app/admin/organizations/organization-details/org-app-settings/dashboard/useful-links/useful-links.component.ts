import { Component } from '@angular/core';

@Component({
    selector: 'app-useful-links',
    templateUrl: './useful-links.component.html',
    styleUrl: './useful-links.component.scss',
    standalone: false,
})
export class UsefulLinksComponent {
    links = [
        {
            title: 'Arai Infotech',
            url: 'https://www.araiinfotech.com',
        },
        {
            title: 'HSC Examination Result February 2024',
            url: 'https://mahresult.nic.in',
        },
        {
            title: 'SSC Examination Result March 2024',
            url: 'https://mahresult.nic.in',
        },
        {
            title: 'Maharashtra Exams Related Updates',
            url: 'https://www.mahahsscboard.in/en',
        },
    ];
}
