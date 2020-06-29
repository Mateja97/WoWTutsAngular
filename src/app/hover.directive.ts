import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  element : ElementRef;
  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = 'red';
    this.element.nativeElement.style.fontWeight = 'bold';
    this.element.nativeElement.style.background = 'url(https://cdn.gamer-network.net/2018/usgamer/Wow-History-Vanilla-02.jpg)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = '';
    this.element.nativeElement.style.fontWeight = '';
    this.element.nativeElement.style.backgroundImage = '';
  }

}
