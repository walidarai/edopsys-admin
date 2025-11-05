import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BrowserService {
    isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    getWindow(): Window | null {
        return this.isBrowser ? window : null;
    }

    get window(): Window | null {
        return this.getWindow();
    }
}
