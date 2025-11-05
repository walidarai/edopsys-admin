import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {
    sidebarToggleBtn: HTMLElement | null = null;
    sidebarCollapsed = new BehaviorSubject<boolean>(false);
    sidebarVisible = new BehaviorSubject<boolean>(false);

    sidebarCollapsed$ = this.sidebarCollapsed.asObservable();
    sidebarVisible$ = this.sidebarVisible.asObservable();

    constructor() {}

    handleSidebarToggle(collapse: boolean) {
        this.sidebarCollapsed.next(collapse);
    }

    handleSidebarVisibility(visible: boolean) {
        this.sidebarVisible.next(visible);
    }
}
