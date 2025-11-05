import { Component } from '@angular/core';
import { of, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-web-checkin',
    templateUrl: './web-checkin.component.html',
    styleUrl: './web-checkin.component.scss',
    standalone: false,
})
export class WebCheckinComponent {
    currentDate: string = '';
    currentTime: string = '';
    ampm: string = '';

    destroy$ = new Subject();

    ngOnInit() {
        of(this.updateDateTime())
            .pipe(takeUntil(this.destroy$))
            .subscribe((value) => {
                setInterval(() => {
                    this.updateDateTime();
                }, 1000);
            });
    }

    ngOnDestroy(): void {
        this.destroy$.unsubscribe();
    }

    updateDateTime() {
        const now = new Date();

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
        };
        const datePart = now.toLocaleDateString('en-US', {
            year: options.year,
            month: options.month,
            day: options.day,
        });

        const dayPart = now.toLocaleDateString('en-US', {
            weekday: options.weekday,
        });

        this.currentDate = `${datePart} ${dayPart}`;

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        this.ampm = hours >= 12 ? 'PM' : 'AM';

        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        this.currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
}
