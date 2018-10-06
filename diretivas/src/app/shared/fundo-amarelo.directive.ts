import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) { 
    
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    renderer.setElementStyle(this.elementRef.nativeElement,
    'backgroundColor', 'yellow')
  }

}
