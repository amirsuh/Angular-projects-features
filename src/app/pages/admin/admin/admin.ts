import { Component } from '@angular/core';
import { Master } from '../../../core/services/master';
import { DataBinding } from "../data-binding/data-binding";
import { DataHiding } from "../data-hiding/data-hiding";

@Component({
  selector: 'app-admin',
  imports: [DataBinding, DataHiding],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
counter:number=0;
firstName:string="Suhail";
isDiviVisible:boolean=false;
currcounter:number=0;
constructor(private master:Master){
  // this.currcounter=this.master.currenCounter;
  this.master.$currentCounterSubject.subscribe(res=>{
    this.currcounter=res;
  });
    this.master.$currentCounterBehaiourSubject.subscribe(res=>{
    this.currcounter=res;
  });
}
ondeccrement(){
  this.counter--;
  this.master.currenCounter=this.counter;
 }
oncrement(){
  this.counter++;
  this.master.currenCounter=this.counter;
 }
}
