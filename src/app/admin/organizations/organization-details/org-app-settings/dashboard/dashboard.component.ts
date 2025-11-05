import { Component, HostListener } from '@angular/core';
import { BrowserService } from '../../../../../shared/services/browser/browser.service';

enum BreakpointEnum {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'lerge',
}
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    standalone: false,
})
export class DashboardComponent {
    breakpoints = {
        small: 500,
        medium: 768,
        large: 1024,
    };
    currentBreakpoint!: BreakpointEnum;
    breakpointEnum = BreakpointEnum;

    constructor(private browserService: BrowserService) {
        this.detectScreenSize(this.browserService.getWindow()?.innerWidth);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.detectScreenSize(event.target.innerWidth);
    }

    private detectScreenSize(width = 0) {
        if (width < this.breakpoints.small) {
            this.currentBreakpoint = BreakpointEnum.SMALL;
        } else if (
            width >= this.breakpoints.small &&
            width < this.breakpoints.medium
        ) {
            this.currentBreakpoint = BreakpointEnum.MEDIUM;
        } else {
            this.currentBreakpoint = BreakpointEnum.LARGE;
        }
    }
}
