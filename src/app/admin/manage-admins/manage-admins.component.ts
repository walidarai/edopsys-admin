import { Component } from '@angular/core';
import { DeleteModal } from '../../shared/components/delete-modal/interfaces/delete-modal.interface';

@Component({
    selector: 'app-manage-admins',
    templateUrl: './manage-admins.component.html',
    styleUrl: './manage-admins.component.scss',
    standalone: false,
})
export class ManageAdminsComponent {
    adminUsers = [
        {
            id: 1,
            name: 'Admin Panel',
            email: 'adminpanel@araiinfotech.com',
            permission: 'MANAGE',
        },
        {
            id: 2,
            name: 'Saeem Arai',
            email: 'saeem@araiinfotech.com',
            permission: 'MANAGE',
        },
        {
            id: 3,
            name: 'Walid Arai',
            email: 'walid@araiinfotech.com',
            permission: 'VIEW',
        },
    ];

    isVisible = false;
    isDeleteVisible = false;
    deleteDetails: DeleteModal = {
        title: '',
        description: 'Deleting this will also remove the related items.',
    };

    selectedUser = null;

    toggleModal(selectedUser?: any) {
        this.isVisible = !this.isVisible;
        this.selectedUser = selectedUser ? selectedUser : null;
    }

    toggleDeleteModal(selectedUser?: any) {
        this.isDeleteVisible = !this.isDeleteVisible;
        this.deleteDetails.title = `Are you sure to delete ${selectedUser?.name} ?`;
    }
}
