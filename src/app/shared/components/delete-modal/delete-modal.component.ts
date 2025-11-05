import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeleteModal } from './interfaces/delete-modal.interface.js';

@Component({
    selector: 'app-delete-modal',
    templateUrl: './delete-modal.component.html',
    styleUrl: './delete-modal.component.scss',
    standalone: false,
})
export class DeleteModalComponent {
    @Input() isDeleteModalVisible: boolean = false;
    @Input() deleteModalDetails!: DeleteModal;
    @Output() closeDeleteModal = new EventEmitter<void>();
    @Output() itemDelete = new EventEmitter<void>();
    @Input() customStyle: string = '';
    @Input() deleteButton: string = 'Delete';

    constructor() {}

    deleteItem(): void {
        this.itemDelete.emit();
    }
    deleteToggle(): void {
        this.closeDeleteModal.emit();
    }
}
