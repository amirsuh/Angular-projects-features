import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { StructuralDir } from "../directives/structural-dir/structural-dir";
import { VirtualScroll } from "../directives/virtual-scroll/virtual-scroll";
import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, I18nPluralPipe, I18nSelectPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ReversePipe } from '../../../shared/pipes/reverse.pipe';
export interface User{
  user:string,email:string
}
@Component({
  selector: 'app-comp-template',
  imports: [FormsModule,DecimalPipe, StructuralDir,PercentPipe,I18nSelectPipe,ReversePipe, VirtualScroll,DatePipe,UpperCasePipe,CurrencyPipe,LowerCasePipe,UpperCasePipe,AsyncPipe,SlicePipe,I18nPluralPipe],
  templateUrl: './comp-template.html',
  styleUrl: './comp-template.scss',
})
export class CompTemplate implements AfterViewInit{
interPolation:string ='Interpolation'
interPolationData:string ="Displays a component property's value as dynamic text."
propertyBinding:string = 'Property Binding'
ngmodelData:string = `(<code>[(ngModel)]="..."</code>): Synchronizes data flow in both directions (requires importing the <em>FormsModule</em>).`
currentDate = new Date()
dataObservable: Observable<string> = of('Hello from AsyncPipe!');
user$:Observable<User> = of({user:'amir',email:'as@as.com'})
@ViewChild('nameInput') inputElementRef!: ElementRef;
@ViewChild('myInputForFocus') inputElemnt!:ElementRef;

EventBinding(){
  alert('Event binding')
}
callPhone(text:any){
console.log(text)
}
  ngAfterViewInit() {
    this.inputElementRef.nativeElement.focus();
    this.inputElemnt.nativeElement.focus()
  }
}
