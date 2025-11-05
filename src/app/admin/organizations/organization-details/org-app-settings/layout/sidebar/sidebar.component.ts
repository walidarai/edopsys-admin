import {
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild,
} from '@angular/core';
import { SidebarTabs } from './interfaces/sidebar.interface.js';
import { SidebarService } from '../services/sidebar.service.js';
import { BrowserService } from '../../../../../../shared/services/browser/browser.service.js';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    standalone: false,
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
            },
            {
                name: 'My Profile',
                icon: 'fa fa-user',
            },
            {
                name: 'My Class',
                icon: 'fa fa-tachometer',
            },
            {
                name: 'Org Chart',
                icon: 'fa fa-sitemap',
            },
            {
                name: 'News & Ann.',
                icon: 'fa fa-newspaper-o',
            },
            {
                name: 'Events',
                icon: 'fa fa-calendar',
            },
            {
                name: 'Performance Review',
                icon: 'fa fa-star',
            },
            {
                name: 'Library',
                icon: 'fa fa-book',
            },
            {
                name: 'Holiday',
                icon: 'fa fa-umbrella',
            },
            {
                name: 'Fees',
                icon: 'fa fa-inr',
            },
            {
                name: 'Salary',
                icon: 'fa fa-money',
            },
        ],
        systemManagement: [
            {
                name: 'Organization',
                icon: 'fa fa-cog',
                childrens: [
                    {
                        name: 'Departments',
                    },
                    {
                        name: 'Classes',
                    },
                    {
                        name: 'Positions',
                    },
                    {
                        name: 'Classifications',
                    },
                ],
            },
            {
                name: 'Reports',
                icon: 'fa fa-bar-chart',
                childrens: [
                    {
                        name: 'Salary',
                    },
                    {
                        name: 'Turnover',
                    },
                ],
            },
            {
                name: 'Manage Attendance',
                icon: 'fa fa-calendar',
            },
            {
                name: 'Assesment',
                icon: 'fa fa-laptop',
                childrens: [
                    {
                        name: 'Cycles',
                    },
                    {
                        name: 'Templates',
                    },
                    {
                        name: 'Questions',
                    },
                ],
            },

            {
                name: 'Manage Time Table',
                icon: 'icon-table2 pt-1',
            },
            {
                name: 'Staff',
                icon: 'fa fa-address-card-o',
            },
            {
                name: 'Students',
                icon: 'fa fa-users',
            },
            {
                name: 'Certificate Request',
                icon: 'fa fa-file',
            },
            {
                name: 'Manage Permissions',
                icon: 'fa fa-lock',
                childrens: [
                    {
                        name: 'Access Groups',
                    },
                    {
                        name: 'User Permissions',
                    },
                    {
                        name: 'Hierarchy Permissions',
                    },
                ],
            },
        ],
    };

    activeMenu = 'Dashboard';

    constructor(
        private sidebarService: SidebarService,
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

    handleActiveMenu(menu: string) {
        this.activeMenu = menu;
    }
}
