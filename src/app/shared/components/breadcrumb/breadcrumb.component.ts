import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Breadcrumb } from './interface/breadcrumb.interface';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    standalone: false,
    styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
    breadcrumbs: Breadcrumb[] = [];
    private routerSubscription!: Subscription;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.updateBreadcrumbs();
            }
        });
        this.updateBreadcrumbs();
    }

    updateBreadcrumbs(): void {
        const completeUrl = this.router.url;
        const routeArray = completeUrl.split('/').filter((item) => item);
        this.buildBreadcrumbs(routeArray);
    }

    buildBreadcrumbs(routeArray: string[]): void {
        this.breadcrumbs = [
            { label: 'Dashboard', url: '/dashboard' },
            ...routeArray.map((route, index) => {
                return {
                    label: this.transformLabel(route),
                    url: '/' + routeArray.slice(0, index + 1).join('/'),
                };
            }),
        ];
    }

    transformLabel(label: string): string {
        let transformedLabel = label.replace(/-/g, ' ');
        transformedLabel = transformedLabel.replace(/\b\w/g, (char) =>
            char.toUpperCase()
        );
        return transformedLabel.split('?')[0];
    }

    ngOnDestroy(): void {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }
}
