import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

 @Input() backgroundColor: string = 'lightgreen';

  // constructor(private element: ElementRef, @Inject(Document) private document: Document) { 
  //   console.log(this.element.nativeElement)
  // }

  constructor(private element: ElementRef, private renderer : Renderer2) { 
    console.log(this.element.nativeElement)
  }

  ngOnInit(){
    // this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backgroundColor);
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backgroundColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#fff');
  }

}
