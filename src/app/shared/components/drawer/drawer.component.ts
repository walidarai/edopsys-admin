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
    selector: 'app-drawer',
    templateUrl: './drawer.component.html',
    styleUrl: './drawer.component.scss',
    standalone: false,
})
export class DrawerComponent implements AfterViewInit, OnChanges {
    @Input() isVisible = false;
    @Output() handleClose = new EventEmitter<void>();
    @ViewChild('drawerFooter') drawerFooter!: ElementRef;
    hasFooter = true;

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.checkFooterChildren();
    }

    ngOnChanges(): void {
        this.checkFooterChildren();
    }

    checkFooterChildren() {
        setTimeout(() => {
            if (this.drawerFooter?.nativeElement instanceof HTMLDivElement) {
                this.hasFooter =
                    this.drawerFooter?.nativeElement?.hasChildNodes() || false;
            }
            this.cdr.detectChanges();
        }, 0);
    }

    closeDrawer(): void {
        this.handleClose.emit();
    }
}
