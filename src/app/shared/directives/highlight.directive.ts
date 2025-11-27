import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";


@Directive({
  selector:'[appHighlight]',
   standalone: true
})
export class AppHighlightDirective implements OnInit{
  @Input('appHighlight')  color ='lighblue'
  constructor(private el:ElementRef){

  }
  ngOnInit(): void {
    this.setBgColor(this.color)
  }
  setBgColor(color:string){
   this.el.nativeElement.style.backgroundColor = color
  }

  @HostListener('mouseenter')
  setMouse(){
    this.el.nativeElement.style.backgroundColor = 'blue'
  }
  @HostListener('mouseleave')
  mouseLeave(){
    this.el.nativeElement.style.backgroundColor = this.color
  }
 }
