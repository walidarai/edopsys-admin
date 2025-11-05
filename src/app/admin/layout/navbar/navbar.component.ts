import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
    selector: 'app-navbar',
    standalone: false,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    @ViewChild('sidebarToggleBtn', { static: true })
    sidebarToggleBtn!: ElementRef;
    sidebarCollapsed = false;
    sidebarVisible = false;

    constructor(private sidebarService: SidebarService) {}

    ngOnInit(): void {
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
