import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
    exportAs: 'appDropdown',
    standalone: false,
})
export class DropdownDirective {
    @Input('appDropdown') dropdownMenu!: HTMLElement;

    isOpen = false;

    constructor(private el: ElementRef) {}

    @HostListener('click')
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event) {
        if (!this.el.nativeElement.contains(event.target) && this.isOpen) {
            this.isOpen = false;
        }
    }
}
