import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMAGES } from '../../../utils/settings';

@Injectable({
    providedIn: 'root',
})
export class NavbarService {
    images$ = new BehaviorSubject<Record<string, string>>(IMAGES);
    imagesSubject = this.images$.asObservable();

    constructor() {}

    updateImages(images: Record<string, string>) {
        this.images$.next(images);
    }
}
