import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationCreateComponent } from './organization-create/organization-create.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { OrganizationDetailsFormComponent } from './organization-details-form/organization-details-form.component';
import { OrganizationPageComponent } from './organization-page/organization-page.component';
import { OrganizationProductComponent } from './organization-product/organization-product.component';
import { OrganizationSidePanelComponent } from './organization-side-panel/organization-side-panel.component';
import { OrganizationStatusComponent } from './organization-status/organization-status.component';
import { OrganizationUpsellsComponent } from './organization-upsells/organization-upsells.component';
import { OrganizationAccountsComponent } from './organization-page/organization/organization-accounts/organization-accounts.component';
import { OrganizationActivateModalComponent } from './organization-page/organization/organization-activate-modal/organization-activate-modal.component';
import { OrganizationDeleteModalComponent } from './organization-page/organization/organization-delete-modal/organization-delete-modal.component';
import { OrganizationLockModalComponent } from './organization-page/organization/organization-lock-modal/organization-lock-modal.component';
import { OrganizationComponent } from './organization-page/organization/organization.component';
import { OrganizationConfigurationComponent } from './organization-page/organization/organization-configuration/organization-configuration.component';
import { OrganizationFeaturesComponent } from './organization-page/organization-features/organization-features.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrgDetailsPageComponent } from './organization-details/org-details-page/org-details-page.component';
import { OrgFeaturesComponent } from './organization-details/org-features/org-features.component';
import { OrgAppSettingsComponent } from './organization-details/org-app-settings/org-app-settings.component';
import { SidebarComponent } from './organization-details/org-app-settings/layout/sidebar/sidebar.component';
import { NavbarModule } from './organization-details/org-app-settings/layout/navbar/navbar.module';
import { ColorSketchModule } from 'ngx-color/sketch';
import { FooterComponent } from './organization-details/org-app-settings/layout/footer/footer.component';
import { DashboardModule } from './organization-details/org-app-settings/dashboard/dashboard.module';

@NgModule({
    declarations: [
        OrganizationsComponent,
        OrganizationCreateComponent,
        OrganizationDetailsComponent,
        OrganizationDetailsFormComponent,
        OrganizationPageComponent,
        OrganizationProductComponent,
        OrganizationSidePanelComponent,
        OrganizationStatusComponent,
        OrganizationUpsellsComponent,
        OrganizationAccountsComponent,
        OrganizationActivateModalComponent,
        OrganizationDeleteModalComponent,
        OrganizationLockModalComponent,
        OrganizationComponent,
        OrganizationConfigurationComponent,
        OrganizationFeaturesComponent,
        OrgDetailsPageComponent,
        OrgFeaturesComponent,
        OrgAppSettingsComponent,
        SidebarComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        OrganizationsRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NavbarModule,
        ColorSketchModule,
        DashboardModule,
    ],
})
export class OrganizationsModule {}
