import { Component } from '@angular/core';
import { SidebarService } from './layout/services/sidebar.service';


@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  sidebarCollapsed = false;
    constructor(private sidebarService: SidebarService) {}

    ngOnInit(): void {
        this.sidebarService.sidebarCollapsed$.subscribe((collapse) => {
            this.sidebarCollapsed = collapse;
        });
    }

}
