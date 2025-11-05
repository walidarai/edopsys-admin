import { KeyValue } from '@angular/common';
import {
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild,
} from '@angular/core';
import { NavbarService } from './layout/navbar/services/navbar.service';
import { COLORS, IMAGES } from './utils/settings';
import { SidebarService } from './layout/services/sidebar.service';

@Component({
    selector: 'app-org-app-settings',
    templateUrl: './org-app-settings.component.html',
    styleUrl: './org-app-settings.component.scss',
    standalone: false,
})
export class OrgAppSettingsComponent implements OnInit {
    sidebarCollapsed = false;
    @ViewChild('theme') theme!: ElementRef;
    preview = 'compress';

    colors: Record<string, string> = COLORS;
    selectedPicker = '';

    images: Record<string, string> = IMAGES;

    constructor(
        private sidebarService: SidebarService,
        private navbarService: NavbarService
    ) {}

    ngOnInit(): void {
        this.sidebarService.sidebarCollapsed$.subscribe((collapse) => {
            this.sidebarCollapsed = collapse;
        });
    }

    keepOrder = (a: KeyValue<string, any>, b: KeyValue<string, any>): number =>
        0;

    @HostListener('document:click', ['$event'])
    handleClickOutside($event: MouseEvent) {
        if (this.selectedPicker) {
            const picker = this.theme.nativeElement.contains(
                $event.target as Node
            );
            if (!picker) {
                this.handleColorPicker('');
            }
        }
    }

    onColorChange(event: any, target: string) {
        event.$event.preventDefault();
        this.colors[target] = event.color.hex;
        this.setTheme();
    }

    setTheme() {
        const root = document.documentElement;
        Object.keys(this.colors).forEach((key) => {
            root.style.setProperty(`--color-app-${key}`, this.colors[key]);
        });
    }

    handleColorPicker(target: string) {
        this.selectedPicker = this.selectedPicker !== target ? target : '';
    }

    stopPropagation(event: Event) {
        event.stopPropagation();
    }

    getContrastColor(hexColor: string): string {
        if (!hexColor) return 'black';

        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        //* Perceived brightness formula *//
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        return brightness > 150 ? 'black' : 'white';
    }

    onFileSelected(event: Event, type: string): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = (e: any) => {
                this.images[type] = e.target.result;
                this.navbarService.updateImages(this.images);
            };
            reader.readAsDataURL(file);
        }
    }

    handlePreviewToggle(type: string) {
        this.preview = type;
    }

    resetTheme() {
        this.colors = {
            primary: '#263065',
            secondary: '#99a1af',
            background: '#f5f5dc',
            accent: '#ffffff',
            highlight: '#2b7fff',
        };
        this.setTheme();
        this.images = {
            icon: '../../../../assets/images/logos/CapHighResT.png',
            logo: '../../../../assets/images/logos/NameHighResT.png',
        };
        this.navbarService.updateImages(this.images);
    }
}
