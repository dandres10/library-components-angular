import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[legCoreElement]'
})
export class CoreElementDirective {

  elementRef?: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize() {
    const auxElementRef = this.elementRef;
    this.elementRef = undefined
    return this.elementRef = auxElementRef;
  }



  constructor(elem: ElementRef) {
    if (elem)
      this.elementRef = elem;
  }

}
