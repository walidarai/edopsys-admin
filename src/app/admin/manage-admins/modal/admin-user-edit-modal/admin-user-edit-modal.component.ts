import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-admin-user-edit-modal',
    templateUrl: './admin-user-edit-modal.component.html',
    styleUrl: './admin-user-edit-modal.component.scss',
    standalone: false,
})
export class AdminUserEditModalComponent implements OnInit {
    @Input() isVisible = false;
    @Input() user?: any;
    @Output() handleClose = new EventEmitter<void>();
    @Output() handleSave = new EventEmitter<void>();

    userForm!: FormGroup;
    permissions = [
        { value: 'MANAGE', text: 'Create/Modify Organizations' },
        { value: 'VIEW', text: 'View Organizations' },
    ];

    constructor(private fb: FormBuilder) {
        this.userForm = this.fb.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            permission: new FormControl(''),
        });
    }

    ngOnInit(): void {
        if (this.user?.id) {
            this.userForm.patchValue({
                email: this.user.email,
                permission: this.user.permission,
            });
        }
    }

    get email(): FormControl {
        return this.userForm.get('email') as FormControl;
    }

    get permission(): FormControl {
        return this.userForm.get('permission') as FormControl;
    }

    onSave() {}

    onClose(): void {
        this.isVisible = false;
        this.handleClose.emit();
    }
}
