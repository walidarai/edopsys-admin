import { Component } from '@angular/core';

@Component({
    selector: 'app-org-features',
    templateUrl: './org-features.component.html',
    styleUrl: './org-features.component.scss',
    standalone: false,
})
export class OrgFeaturesComponent {
    isActive = false;
    featuresList = [
        {
            id: 1,
            name: 'Web Check In',
            enabled: true,
            icon: 'fa fa-clock-o',
        },
        {
            id: 2,
            name: 'Reviews',
            enabled: true,
            icon: 'fa fa-star',
        },
        {
            id: 3,
            name: 'Attendance',
            enabled: true,
            icon: 'fa fa-calendar',
        },
        {
            id: 4,
            name: 'Time Table',
            enabled: true,
            icon: 'icon-table2',
        },
        {
            id: 5,
            name: 'Certificate Request',
            enabled: true,
            icon: 'fa fa-file',
        },
        {
            id: 6,
            name: 'Feedback',
            enabled: true,
            icon: 'fa fa-comment',
        },
        {
            id: 7,
            name: 'Leaderboard',
            enabled: false,
            icon: 'fa fa-bar-chart',
        },
        {
            id: 8,
            name: 'Notes',
            enabled: true,
            icon: 'fa fa-file',
        },
        {
            id: 9,
            name: 'Online Sessions',
            enabled: true,
            icon: 'fa fa-laptop',
        },
        {
            id: 10,
            name: 'Assignments',
            enabled: false,
            icon: 'fa fa-book',
        },
        {
            id: 11,
            name: 'Syllabus',
            enabled: true,
            icon: 'fa fa-check-square',
        },
        {
            id: 12,
            name: 'Library',
            enabled: false,
            icon: 'fa fa-book',
        },
        {
            id: 13,
            name: 'Holiday',
            enabled: true,
            icon: 'fa fa-calendar',
        },
        {
            id: 14,
            name: 'Fees',
            enabled: true,
            icon: 'fa fa-inr',
        },
        {
            id: 15,
            name: 'Salary',
            enabled: true,
            icon: 'fa fa-money',
        },
        {
            id: 16,
            name: 'Reports',
            enabled: false,
            icon: 'fa fa-bar-chart',
        },
        {
            id: 17,
            name: 'Email',
            enabled: true,
            icon: 'fa fa-envelope-o',
        },
        {
            id: 18,
            name: 'Events',
            enabled: true,
            icon: 'fa fa-calendar',
        },
        {
            id: 19,
            name: 'Students',
            enabled: true,
            icon: 'fa fa-users',
        },
        {
            id: 20,
            name: 'Staffs',
            enabled: true,
            icon: 'fa fa-address-card',
        },
        {
            id: 21,
            name: 'News & Announcements',
            enabled: true,
            icon: 'fa fa-newspaper-o',
        },
    ];

    filteredFeatureList = this.featuresList;

    handleFeatureToggle(feature: any) {
        feature.enabled = !feature.enabled;
    }

    handleFeatureFilter() {
        if (this.isActive) {
            return this.featuresList.sort(
                (a, b) => (b.enabled ? 1 : 0) - (a.enabled ? 1 : 0)
            );
        } else {
            return this.featuresList.sort(
                (a, b) => (a.enabled ? 1 : 0) - (b.enabled ? 1 : 0)
            );
        }
    }
}
