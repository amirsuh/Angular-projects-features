import { Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {

  @Output() scrolled = new EventEmitter<void>();
  @Input() scrollDistance = 200; // pixels from bottom

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - this.scrollDistance;

    if (scrollPosition >= threshold) {
      this.scrolled.emit();
    }
  }
}
