import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogInput]'
})
export class LogInputDirective {

  constructor() {}

  @HostListener('change', ['$event']) logOnChange(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }

}