import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'nav[scrollDown]' // Modifier le sélecteur pour cibler l'élément <nav>
})
export class ScrollDownDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 100) { // Changer cette valeur selon quand vous voulez que la navbar devienne visible
      this.renderer.addClass(this.elementRef.nativeElement, 'scrolled');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'scrolled');
    }
  }
}
