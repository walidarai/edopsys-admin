import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { SupportComponent } from './support/support.component';
import { NotificationListComponent } from './layout/navbar/notification/notification-list/notification-list.component';

const routes: Routes = [
      {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'organizations',
                loadChildren: () =>
                    import('./organizations/organizations.module').then(
                        (m) => m.OrganizationsModule
                    ),
            },
            {
                path: 'user-management',
                component: ManageAdminsComponent,
            },
            {
                path: 'support-issues',
                component: SupportComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'open',
                        pathMatch: 'full',
                    },
                    {
                        path: ':type',
                        component: SupportComponent,
                    },
                ],
            },
            {
                path: 'notifications',
                component: NotificationListComponent,
            },
        ],
    },
    {
        path: '**',
        component: AdminComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
