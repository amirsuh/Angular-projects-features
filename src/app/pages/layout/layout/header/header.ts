import { Component } from '@angular/core';
import { Master } from '../../../../core/services/master';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
counter:number=0;
constructor(private master:Master){
  this.counter=this.master.currenCounter;
 }
ondeccrement(){
  this.counter--;
  this.master.$currentCounterSubject.next(this.counter);
  this.master.$currentCounterBehaiourSubject.next(this.counter);
  //this.master.currenCounter=this.counter;
 }
oncrement(){
  this.counter++;
  // this.master.currenCounter=this.counter;
  this.master.$currentCounterSubject.next(this.counter);
  this.master.$currentCounterBehaiourSubject.next(this.counter);
 }
}
