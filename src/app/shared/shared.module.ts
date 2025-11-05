import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorMessageComponent } from './components/field-error-message/field-error-message.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RequiredFieldsComponent } from './components/required-fields/required-fields.component';
import { FocusFirstInvalidFieldDirective } from './directives/focus-first-invalid-field.directive';
import { LoadingButtonDirective } from './directives/loading-button.directive';
// import { DatetimeFormatPipe } from './pipes/datetime-format.pipe';
import { DropdownDirective } from './directives/dropdown.directive';
import { SubTabsComponent } from './components/sub-tabs/sub-tabs.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import {
    ButtonDangerDirective,
    ButtonHoverOutlineNeutralDirective,
    ButtonIconDirective,
    ButtonNeutralDirective,
    ButtonOutlineDangerDirective,
    ButtonOutlineNeutralDirective,
    ButtonOutlinePrimaryDirective,
    ButtonOutlineSecondaryDirective,
    ButtonOutlineSuccessDirective,
    ButtonPrimaryDirective,
    ButtonSecondaryDirective,
    ButtonSuccessDirective,
} from './directives/buttons/button.directive';
import { SharedModalComponent } from './components/shared-modal/shared-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

const components = [
    FieldErrorMessageComponent,
    MessagesComponent,
    RequiredFieldsComponent,
    FocusFirstInvalidFieldDirective,
    LoadingButtonDirective,
    // DatetimeFormatPipe,
    DropdownDirective,
    SubTabsComponent,
    BreadcrumbComponent,
    DrawerComponent,
    SharedModalComponent,
    DeleteModalComponent,
];

const directives = [
    ButtonIconDirective,
    ButtonPrimaryDirective,
    ButtonSecondaryDirective,
    ButtonNeutralDirective,
    ButtonSuccessDirective,
    ButtonDangerDirective,
    ButtonOutlinePrimaryDirective,
    ButtonOutlineSecondaryDirective,
    ButtonOutlineNeutralDirective,
    ButtonHoverOutlineNeutralDirective,
    ButtonOutlineSuccessDirective,
    ButtonOutlineDangerDirective,
];
@NgModule({
    declarations: [...components, ...directives],
    imports: [CommonModule, RouterModule],
    exports: [...components, ...directives],
})
export class SharedModule {}
