import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { FilterComponent } from './components/filter/filter.component';
import { NgSelectItemsPerPageComponent } from './components/ng-select-items-per-page/ng-select-items-per-page.component';
import { NgxDatatableItemsPerPageComponent } from './components/ngx-datatable-items-per-page/ngx-datatable-items-per-page.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { ModalBaseComponent } from './modals/modal-base/modal-base.component';

@NgModule({
  declarations: [
    DateTimePickerComponent,
    FilterComponent,
    NgSelectItemsPerPageComponent,
    NgxDatatableItemsPerPageComponent,
    ConfirmationModalComponent,
    ModalBaseComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
