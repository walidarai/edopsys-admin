import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-organization-create',
    templateUrl: './organization-create.component.html',
    styleUrl: './organization-create.component.scss',
    standalone: false,
})
export class OrganizationCreateComponent {
    @Input() isDrawerVisible = false;
    @Output() handleClose = new EventEmitter<void>();

    durations = ['1 year', '2 year', '3 year', '4 year', '5 year'];
    products = ['Pro', 'Standard'];
    orgType = ['Customer', 'Test'];

    organizationForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.organizationForm = this.fb.group({
            companyName: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            contractDuration: ['', Validators.required],
            product: ['', Validators.required],
            orgType: ['', Validators.required],
        });
    }

    get form() {
        return this.organizationForm.controls;
    }

    onSubmit() {
        if (this.organizationForm.invalid) {
            this.organizationForm.markAllAsTouched();
            return;
        }
        alert(JSON.stringify(this.organizationForm.value, null, 2));
    }

    toggleDrawer() {
        this.isDrawerVisible = !this.isDrawerVisible;
    }

    closeDrawer() {
        this.toggleDrawer();
        this.handleClose.emit();
    }
}
