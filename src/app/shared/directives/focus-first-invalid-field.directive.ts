import { Directive } from '@angular/core';

@Directive({
  selector: '[appFocusFirstInvalidField]',
  standalone: false,
})
export class FocusFirstInvalidFieldDirective {

  constructor() { }

}
