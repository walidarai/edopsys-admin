import {
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild,
} from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { Router } from '@angular/router';
import { SidebarTabs } from './interfaces/sidebar-tabs.interface';
import { BrowserService } from '../../../shared/services/browser/browser.service';

@Component({
    selector: 'app-sidebar',
    standalone: false,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
    @ViewChild('sidebar') sidebar!: ElementRef;
    sidebarCollapsed = false;
    sidebarVisible = false;

    isDesktop = false;

    sidebarTabs: SidebarTabs = {
        mainMenu: [
            {
                name: 'Dashboard',
                icon: 'fa fa-home',
                link: '/dashboard',
            },
            {
                name: 'Organizations',
                icon: 'fa fa-sitemap',
                link: '/organizations',
            },
            {
                name: 'User Management',
                icon: 'fa fa-user',
                link: '/user-management',
            },
            /* {
                name: 'Subscriptions',
                icon: 'fa fa-tachometer',
                link: '/subscriptions',
            }, */
            {
                name: 'Support Issues',
                icon: 'fa fa-newspaper-o',
                link: '/support-issues',
            },
            /* {
                name: 'Manage Notifications',
                icon: 'fa fa-calendar',
                link: '/manage-notifications',
            },
            {
                name: 'Application Settings',
                icon: 'fa fa-star',
                link: '/application-settings',
            }, */
        ],
        // systemManagement: []
    };

    constructor(
        private sidebarService: SidebarService,
        private router: Router,
        private browserService: BrowserService
    ) {
        this.isDesktop = (browserService.getWindow()?.innerWidth || 0) >= 1356;
    }

    ngOnInit(): void {
        this.sidebarService.sidebarVisible$.subscribe(
            (visible) => (this.sidebarVisible = visible)
        );
        this.sidebarService.sidebarCollapsed$.subscribe((collapse) => {
            this.sidebarCollapsed = collapse;
        });
    }

    @HostListener('window:resize')
    handleWindowResize() {
        const currentIsDesktop =
            (this.browserService.getWindow()?.innerWidth || 0) >= 1356;
        if (this.isDesktop && !currentIsDesktop) {
            this.sidebarCollapsed = false;
            this.sidebarService.handleSidebarToggle(false);
        }
        this.isDesktop = currentIsDesktop;
    }

    @HostListener('document:click', ['$event'])
    handleClickOutside($event: MouseEvent) {
        if (this.sidebarVisible && !this.isDesktop) {
            const toggleBtn = this.sidebarService.sidebarToggleBtn?.contains(
                $event.target as Node
            );
            if (
                !this.sidebar?.nativeElement?.contains($event.target) &&
                !toggleBtn
            ) {
                this.handleSidebarVisibility();
            }
        }
    }

    handleSidebarVisibility() {
        this.sidebarVisible = !this.sidebarVisible;
        this.sidebarService.handleSidebarVisibility(this.sidebarVisible);
    }

    navigateTo(route: string = '') {
        if (route) {
            this.router.navigate([route]);
            if (!this.isDesktop) {
                this.handleSidebarVisibility();
            }
            this.scrollToTop();
        } else {
            return;
        }
    }

    scrollToTop() {
        this.browserService.getWindow()?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        const contentContainer = document.querySelector(
            '.scrollable-content'
        ) as HTMLElement;
        contentContainer?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}
