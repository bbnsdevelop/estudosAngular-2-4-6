import { Directive, HostListener, ElementRef, 
         Renderer, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

 @Input('textoDiretiva') textoDiretiva: string;

  @HostListener('mouseenter') onMouseOver(){
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor: string;

  constructor(/*private elementRef: ElementRef, private renderer: Renderer*/) {
    
  }

}
