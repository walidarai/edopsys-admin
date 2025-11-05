import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { SidebarService } from '../services/sidebar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    standalone: false,
})
export class NavbarComponent implements OnInit {
    @ViewChild('sidebarToggleBtn', { static: true })
    sidebarToggleBtn!: ElementRef;
    sidebarCollapsed = false;
    sidebarVisible = false;

    images: any;

    constructor(
        private sidebarService: SidebarService,
        private navbarService: NavbarService
    ) {}

    ngOnInit(): void {
        this.navbarService.images$.subscribe((images) => {
            this.images = images;
        });
        this.sidebarService.sidebarVisible$.subscribe(
            (visible) => (this.sidebarVisible = visible)
        );

        this.sidebarService.sidebarCollapsed$.subscribe(
            (collapse) => (this.sidebarCollapsed = collapse)
        );
    }

    ngAfterViewInit(): void {
        this.sidebarService.sidebarToggleBtn =
            this.sidebarToggleBtn.nativeElement;
    }

    handleToggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        this.sidebarService.handleSidebarToggle(this.sidebarCollapsed);
    }

    handleSidebarVisibility() {
        this.sidebarVisible = !this.sidebarVisible;
        this.sidebarService.handleSidebarVisibility(this.sidebarVisible);
    }
}
