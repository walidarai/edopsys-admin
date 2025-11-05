import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { WebCheckinComponent } from './web-checkin/web-checkin.component';
import { AnniversariesDashboardComponent } from './anniversaries-dashboard/anniversaries-dashboard.component';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
    declarations: [
        DashboardComponent,
        WebCheckinComponent,
        AnniversariesDashboardComponent,
        NewsDashboardComponent,
        EventDashboardComponent,
        UsefulLinksComponent,
    ],
    imports: [CommonModule, SharedModule],
    exports: [DashboardComponent],
})
export class DashboardModule {}
