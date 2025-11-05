import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component.js';
import { ProfileComponent } from './profile/profile.component.js';
import { SearchComponent } from './search/search.component.js';
import { EmailComponent } from './email/email.component.js';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../../shared/shared.module.js';
import { NavbarComponent } from './navbar.component.js';

const components = [
    NavbarComponent,
    NotificationComponent,
    ProfileComponent,
    SearchComponent,
    EmailComponent,
];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, SharedModule, RouterModule],
    exports: [...components],
})
export class NavbarModule {}
