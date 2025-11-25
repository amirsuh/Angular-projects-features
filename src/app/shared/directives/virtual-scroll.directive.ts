import { Directive, EventEmitter,  HostListener,  Input, Output } from "@angular/core";

@Directive({
  selector:'[appVirtualScroll]'
})

export class VirtualScroll {
 @Input() scrollThreshold = 0.8
 @Output() scrolled = new EventEmitter<void>();

 constructor(){}
 @HostListener ('scroll', ['$event'])
 onScroll(event:any){
  const element = event.target;
    const scrollPosition = element.scrollTop + element.clientHeight;
    const scrollHeight = element.scrollHeight;

    if (scrollPosition / scrollHeight >= this.scrollThreshold) {
      this.scrolled.emit();
    }
 }
}
