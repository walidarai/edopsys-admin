import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-shared-modal',
    templateUrl: './shared-modal.component.html',
    styleUrl: './shared-modal.component.scss',
    standalone: false,
})
export class SharedModalComponent implements AfterViewInit, OnChanges {
    @Input() isVisible = false;
    @Input() hasHeader = true;
    @Input() fullScreen = false;
    @Input() customStyle = '';
    @Input() closeOnBackdropClick = true;
    @Output() close = new EventEmitter<void>();
    @Output() scrollToBottom = new EventEmitter<boolean>();
    @ViewChild('modalFooter') modalFooter!: ElementRef;
    hasFooter = true;
    isScrollToBottom = false;

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.checkFooterChildren();
    }

    ngOnChanges(): void {
        this.checkFooterChildren();
    }

    checkFooterChildren() {
        setTimeout(() => {
            if (this.modalFooter?.nativeElement instanceof HTMLDivElement) {
                this.hasFooter = this.modalFooter?.nativeElement?.hasChildNodes() || false;
            }
            this.cdr.detectChanges();
        }, 0);
    }

    closeModal(): void {
        this.close.emit();
    }

    onScroll(scrollableContent: HTMLElement) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
        if (scrollableContent) {
            this.isScrollToBottom = scrollTop + clientHeight >= scrollHeight - 1;
            this.scrollToBottom.emit(this.isScrollToBottom);
        }
    }

    onBackdropClick(event: Event): void {
        if (this.closeOnBackdropClick) {
            this.closeModal();
        }
    }
}
