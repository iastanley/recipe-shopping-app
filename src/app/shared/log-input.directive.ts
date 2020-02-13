import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogInput]'
})
export class LogInputDirective {

  constructor() {}

  @HostListener('change', ['$event.target']) logOnChange(eventTarget) {
    console.log(eventTarget.value);
  }

}