import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[button]',
    standalone: true,
})
export class ButtonDirective {
    @HostBinding('class')
    get classes() {
        return 'rounded-md px-2 sm:px-4 py-1 sm:py-2 transition hover:ring active:ring-1 hover:shadow-lg active:shadow disabled:cursor-not-allowed';
    }
}

@Directive({
    selector: '[button-icon]',
    standalone: false,
})
export class ButtonIconDirective {
    @HostBinding('class')
    get classes() {
        return 'flex items-center justify-center gap-2';
    }
}

@Directive({
    selector: '[button-primary]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonPrimaryDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-app-primary text-white hover:ring-app-primary';
    }
}

@Directive({
    selector: '[button-secondary]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonSecondaryDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-app-secondary text-white hover:ring-app-secondary';
    }
}

@Directive({
    selector: '[button-neutral]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonNeutralDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-neutral text-white hover:ring-neutral';
    }
}

@Directive({
    selector: '[button-success]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonSuccessDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-green-500 text-white hover:ring-green-500';
    }
}

@Directive({
    selector: '[button-danger]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonDangerDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-red-500 text-white hover:ring-red-500';
    }
}

@Directive({
    selector: '[button-outline-primary]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonOutlinePrimaryDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-transparent text-app-primary ring-2 ring-app-primary';
    }
}

@Directive({
    selector: '[button-outline-secondary]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonOutlineSecondaryDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-transparent text-app-secondary ring-2 ring-app-secondary';
    }
}

@Directive({
    selector: '[button-outline-neutral]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonOutlineNeutralDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-transparent text-neutral ring-2 ring-neutral';
    }
}

@Directive({
    selector: '[button-hover-outline-neutral]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonHoverOutlineNeutralDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-transparent text-app-primary hovey:ring-2 hover:ring-neutral';
    }
}

@Directive({
    selector: '[button-outline-success]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonOutlineSuccessDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-transparent text-green-500 ring-2 ring-green-500';
    }
}

@Directive({
    selector: '[button-outline-danger]',
    hostDirectives: [ButtonDirective],
    standalone: false,
})
export class ButtonOutlineDangerDirective {
    @HostBinding('class')
    get classes() {
        return 'bg-transparent text-red-500 ring-2 ring-red-500';
    }
}
