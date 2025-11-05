import { Directive } from '@angular/core';

@Directive({
  selector: '[appLoadingButton]',
  standalone: false,
})
export class LoadingButtonDirective {

  constructor() { }

}
