import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationPageComponent } from './organization-page/organization-page.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { OrgDetailsPageComponent } from './organization-details/org-details-page/org-details-page.component';
import { OrgFeaturesComponent } from './organization-details/org-features/org-features.component';
import { OrgAppSettingsComponent } from './organization-details/org-app-settings/org-app-settings.component';

const routes: Routes = [
    {
        path: 'details/:id',
        component: OrganizationDetailsComponent,
        children: [
            {
                path: '',
                redirectTo: 'org-details',
                pathMatch: 'full',
            },
            {
                path: 'org-details',
                component: OrgDetailsPageComponent,
            },
            {
                path: 'features',
                component: OrgFeaturesComponent,
            },
            {
                path: 'application-settings',
                component: OrgAppSettingsComponent,
            },
        ],
    },
    {
        path: '',
        component: OrganizationsComponent,
        children: [
            {
                path: '',
                redirectTo: 'customer',
                pathMatch: 'full',
            },
            {
                path: ':type',
                component: OrganizationPageComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'active',
                        pathMatch: 'full',
                    },
                    {
                        path: ':subType',
                        component: OrganizationPageComponent,
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrganizationsRoutingModule {}
