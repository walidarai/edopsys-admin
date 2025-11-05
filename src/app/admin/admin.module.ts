import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionComponent } from './subscriptions/subscription/subscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { AdminUserAccountsComponent } from './manage-admins/admin-user-accounts/admin-user-accounts.component';
import { AdminUserEditModalComponent } from './manage-admins/modal/admin-user-edit-modal/admin-user-edit-modal.component';
import { ManageNotificationMessageComponent } from './manage-notification-message/manage-notification-message.component';
import { NotificationMessageEditComponent } from './manage-notification-message/notification-message-edit/notification-message-edit.component';
import { SupportComponent } from './support/support.component';
import { SupportTypesComponent } from './support/support-types/support-types.component';
import { SupportTypesEditModalComponent } from './support/support-types/modal/support-types-edit-modal/support-types-edit-modal.component';
import { OrganizationsModule } from './organizations/organizations.module';
import { FooterComponent } from './layout/footer/footer.component';
import { SearchComponent } from './layout/navbar/search/search.component';
import { ProfileComponent } from './layout/navbar/profile/profile.component';
import { NotificationComponent } from './layout/navbar/notification/notification.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationListComponent } from './layout/navbar/notification/notification-list/notification-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminComponent,
    SubscriptionsComponent,
    SubscriptionComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ManageAdminsComponent,
    AdminUserAccountsComponent,
    AdminUserEditModalComponent,
    ManageNotificationMessageComponent,
    NotificationMessageEditComponent,
    SupportComponent,
    SupportTypesComponent,
    SupportTypesEditModalComponent,
    FooterComponent,
    SearchComponent,
    ProfileComponent,
    NotificationComponent,
    NotificationListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OrganizationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AdminModule {}
